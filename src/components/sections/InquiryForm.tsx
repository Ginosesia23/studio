"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle, MessageSquare } from "lucide-react";
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
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully. We will be in touch within 24 hours.",
        });
        reset();
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-foreground/70 text-xs font-semibold mb-6">
            <MessageSquare size={14} className="text-accent" />
            <span>Apex Support &middot; Direct to Engineering</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-5 tracking-tight">
            Ready to Get Your <span className="text-accent">Time Back?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stop wasting hours on infrastructure and ad-hoc fixes. Let our team handle the
            complexity while you focus on what matters — running the business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white border border-border/60 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center shrink-0 text-accent border border-border/60">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-primary mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground">{ADMIN_EMAIL}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Replies from a senior engineer within one business day.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl pastel-blue border border-border/60">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--pastel-blue-ink))] mb-3">
                What to Expect
              </p>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                {[
                  "30-minute scoping call within 24 hours",
                  "Tailored proposal with timeline & costs",
                  "Direct line to the engineers building it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-primary">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jane Doe"
                    className="bg-white h-11 text-base rounded-xl border-border/80"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive font-medium">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-primary">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="bg-white h-11 text-base rounded-xl border-border/80"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-semibold text-primary">
                  Company Name <span className="text-muted-foreground font-normal">(Optional)</span>
                </Label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  className="bg-white h-11 text-base rounded-xl border-border/80"
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-primary">
                  How can we support you?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your platform, infrastructure, or feature needs..."
                  className="min-h-[140px] bg-white text-base rounded-xl border-border/80"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive font-medium">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base font-semibold rounded-xl group"
              >
                {loading ? (
                  <Loader2 className="animate-spin mr-2 w-5 h-5" />
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>

              {status && (
                <Alert
                  variant={status.type === "success" ? "default" : "destructive"}
                  className={
                    status.type === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-800" : ""
                  }
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertTitle className="font-bold">
                    {status.type === "success" ? "Success" : "Error"}
                  </AlertTitle>
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
