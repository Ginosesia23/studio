"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useFirestore } from "@/firebase";
import { doc, collection } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";

// --- CONFIGURATION ---
// Change this to the email address where you want to receive inquiries.
const ADMIN_EMAIL = "ginosesia@seajourney.co.uk";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const firestore = useFirestore();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const inquiriesRef = collection(firestore, "inquiries");
      const newDocRef = doc(inquiriesRef);
      const inquiryId = newDocRef.id;

      // This structure is designed to work with the "Trigger Email from Firestore" extension.
      const inquiryData = {
        id: inquiryId,
        senderName: `${data.firstName} ${data.lastName}`,
        senderEmail: data.email,
        senderPhone: "", 
        subject: `Inquiry: ${data.company || 'New Lead'}`,
        messageBody: data.message,
        submissionTimestamp: new Date().toISOString(),
        isRead: false,
        
        // Extension-specific fields:
        to: ADMIN_EMAIL,
        message: {
          subject: `New Elevate Tech Inquiry from ${data.firstName} ${data.lastName}`,
          text: `You have a new inquiry!\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\n\nMessage:\n${data.message}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a;">
              <h2 style="color: #29427A;">New Client Inquiry</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
          `
        }
      };

      setDocumentNonBlocking(newDocRef, inquiryData, { merge: true });
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Get In Touch</h2>
            <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">Let's Discuss Your Project</h3>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to elevate your infrastructure? Fill out the form below or reach out directly 
              to speak with our expert consultants.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Us</h4>
                  <p className="text-muted-foreground">{ADMIN_EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Visit Our Office</h4>
                  <p className="text-muted-foreground">123 Tech Way, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background p-8 lg:p-12 rounded-3xl shadow-xl border">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600 w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-primary">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="border-primary text-primary font-bold"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-white"
                      {...register("firstName")}
                    />
                    {errors.firstName && <p className="text-xs text-destructive font-medium">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-white"
                      {...register("lastName")}
                    />
                    {errors.lastName && <p className="text-xs text-destructive font-medium">{errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-white"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Acme Inc." 
                    className="bg-white"
                    {...register("company")}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..." 
                    className="min-h-[120px] bg-white"
                    {...register("message")}
                  />
                  {errors.message && <p className="text-xs text-destructive font-medium">{errors.message.message}</p>}
                </div>
                
                <Button 
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary hover:bg-accent/90 h-12 font-bold group"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin mr-2 w-4 h-4" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
