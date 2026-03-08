"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ADMIN_EMAIL = "contact@apex-systems.co.uk";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully. We will be in touch within 24 hours.' });
        reset();
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Apex Support</h2>
            <h3 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-6">Contact Us</h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
              Ready to stabilize and scale your infrastructure? Reach out directly 
              to speak with our technical team about your project.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-primary">Email Us</h4>
                  <p className="text-base text-muted-foreground font-medium">{ADMIN_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background p-8 lg:p-12 rounded-[2rem] shadow-2xl border relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-bold">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-white h-12 text-base rounded-xl"
                  {...register("name")}
                />
                {errors.name && <p className="text-xs text-destructive font-medium">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold">Work Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-white h-12 text-base rounded-xl"
                  {...register("email")}
                />
                {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-bold">Company Name (Optional)</Label>
                <Input 
                  id="company" 
                  placeholder="Acme Inc." 
                  className="bg-white h-12 text-base rounded-xl"
                  {...register("company")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-bold">How can we support you?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your hosting or development needs..." 
                  className="min-h-[120px] bg-white text-base rounded-xl"
                  {...register("message")}
                />
                {errors.message && <p className="text-xs text-destructive font-medium">{errors.message.message}</p>}
              </div>
              
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg font-bold rounded-xl group"
              >
                {loading ? (
                  <Loader2 className="animate-spin mr-2 w-5 h-5" />
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>

              {status && (
                <Alert variant={status.type === 'success' ? 'default' : 'destructive'} className={status.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : ''}>
                  {status.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <AlertTitle className="font-bold">{status.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
