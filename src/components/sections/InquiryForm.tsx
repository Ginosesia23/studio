"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgernzj";
const ADMIN_EMAIL = "contact@apex-systems.co.uk";

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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        const result = await response.json();
        throw new Error(result.error || "Form submission failed");
      }
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Apex Support</h2>
            <h3 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-5">Contact Us</h3>
            <p className="text-base text-muted-foreground mb-10 max-w-md">
              Ready to stabilize and scale your infrastructure? Reach out directly 
              to speak with our technical team about your project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">Email Us</h4>
                  <p className="text-sm text-muted-foreground">{ADMIN_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background p-6 lg:p-8 rounded-2xl shadow-lg border">
            {isSubmitted ? (
              <div className="h-full py-8 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600 w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-primary">Inquiry Received</h4>
                  <p className="text-sm text-muted-foreground">
                    An Apex Systems engineer will get back to you within 24 hours.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary font-bold"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-xs">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-white h-9 text-sm"
                      {...register("firstName")}
                    />
                    {errors.firstName && <p className="text-[10px] text-destructive font-medium">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-xs">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-white h-9 text-sm"
                      {...register("lastName")}
                    />
                    {errors.lastName && <p className="text-[10px] text-destructive font-medium">{errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs">Work Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-white h-9 text-sm"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-[10px] text-destructive font-medium">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Acme Inc." 
                    className="bg-white h-9 text-sm"
                    {...register("company")}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs">How can we support you?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your hosting or development needs..." 
                    className="min-h-[100px] bg-white text-sm"
                    {...register("message")}
                  />
                  {errors.message && <p className="text-[10px] text-destructive font-medium">{errors.message.message}</p>}
                </div>
                
                <Button 
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary hover:bg-accent/90 h-10 font-bold group"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin mr-2 w-4 h-4" />
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
