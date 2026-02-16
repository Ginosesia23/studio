"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, CheckCircle2, RefreshCcw, ArrowRight, ArrowLeft } from "lucide-react";
import { recommendServicePackage, type AiServiceRecommendationOutput } from "@/ai/flows/ai-service-recommendation";

const STEPS = [
  { id: "business", title: "Business Context" },
  { id: "technical", title: "Technical Needs" },
  { id: "priority", title: "Support & Budget" },
];

export function AiRecommender() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiServiceRecommendationOutput | null>(null);

  const [formData, setFormData] = useState({
    businessType: "",
    currentHosting: "",
    websiteTraffic: "low",
    technicalExpertise: "none",
    supportPriority: "moderate",
    budgetConsideration: "moderate",
    specificRequirements: "",
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recommendation = await recommendServicePackage(formData);
      setResult(recommendation);
    } catch (error) {
      console.error("AI Recommendation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setStep(0);
    setFormData({
      businessType: "",
      currentHosting: "",
      websiteTraffic: "low",
      technicalExpertise: "none",
      supportPriority: "moderate",
      budgetConsideration: "moderate",
      specificRequirements: "",
    });
  };

  return (
    <section id="ai-recommender" className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6 backdrop-blur-sm border border-accent/20">
              <Sparkles size={16} className="animate-pulse" />
              <span>Personalized AI Advisor</span>
            </div>
            <h2 className="font-headline text-4xl lg:text-6xl font-bold mb-6">Discover Your Ideal Solution</h2>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Answer a few simple questions about your company ecosystem, and our AI will engineer 
              the perfect hosting and support blueprint for your success.
            </p>
          </div>

          {!result ? (
            <Card className="bg-white text-primary overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-none">
              <div className="bg-accent/10 h-3 w-full">
                <div 
                  className="bg-accent h-full transition-all duration-700 ease-out" 
                  style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                />
              </div>
              <CardHeader className="px-8 pt-8">
                <CardTitle className="flex items-center justify-between text-2xl">
                  <span>Step {step + 1}: {STEPS[step].title}</span>
                  <span className="text-base font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {step + 1} / {STEPS.length}
                  </span>
                </CardTitle>
                <CardDescription className="text-base">Tell us about your current operational landscape.</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 0 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                      <div className="space-y-3">
                        <Label htmlFor="businessType" className="text-base font-bold">What is your core business type?</Label>
                        <Input 
                          id="businessType" 
                          placeholder="e.g. E-commerce Platform, Enterprise SaaS, Digital Agency" 
                          className="h-14 text-lg bg-background border-2 focus:border-accent transition-all"
                          value={formData.businessType}
                          onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="currentHosting" className="text-base font-bold">Current infrastructure setup?</Label>
                        <Input 
                          id="currentHosting" 
                          placeholder="e.g. On-premise, AWS, Shared Hosting, No setup yet" 
                          className="h-14 text-lg bg-background border-2 focus:border-accent transition-all"
                          value={formData.currentHosting}
                          onChange={(e) => setFormData({...formData, currentHosting: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <div className="space-y-4">
                        <Label className="text-base font-bold">Average Monthly Traffic Volume</Label>
                        <RadioGroup 
                          value={formData.websiteTraffic}
                          onValueChange={(v) => setFormData({...formData, websiteTraffic: v})}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {["low", "medium", "high", "very high"].map((v) => (
                            <div key={v} className={`flex items-center space-x-3 border-2 rounded-xl p-5 cursor-pointer transition-all ${formData.websiteTraffic === v ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'hover:border-accent/50'}`}>
                              <RadioGroupItem value={v} id={`traffic-${v}`} className="sr-only" />
                              <Label htmlFor={`traffic-${v}`} className="capitalize cursor-pointer font-bold text-lg w-full">{v}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="space-y-4">
                        <Label className="text-base font-bold">Technical Team Proficiency</Label>
                        <RadioGroup 
                          value={formData.technicalExpertise}
                          onValueChange={(v) => setFormData({...formData, technicalExpertise: v})}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {["none", "basic", "intermediate", "expert"].map((v) => (
                            <div key={v} className={`flex items-center space-x-3 border-2 rounded-xl p-5 cursor-pointer transition-all ${formData.technicalExpertise === v ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'hover:border-accent/50'}`}>
                              <RadioGroupItem value={v} id={`exp-${v}`} className="sr-only" />
                              <Label htmlFor={`exp-${v}`} className="capitalize cursor-pointer font-bold text-lg w-full">{v}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <div className="space-y-4">
                        <Label className="text-base font-bold">Support Response Priority</Label>
                        <RadioGroup 
                          value={formData.supportPriority}
                          onValueChange={(v) => setFormData({...formData, supportPriority: v})}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {["low", "moderate", "high", "critical (24/7)"].map((v) => (
                            <div key={v} className={`flex items-center space-x-3 border-2 rounded-xl p-5 cursor-pointer transition-all ${formData.supportPriority === v ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'hover:border-accent/50'}`}>
                              <RadioGroupItem value={v} id={`supp-${v}`} className="sr-only" />
                              <Label htmlFor={`supp-${v}`} className="capitalize cursor-pointer font-bold text-lg w-full">{v}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="requirements" className="text-base font-bold">Specialized Requirements (Optional)</Label>
                        <Textarea 
                          id="requirements" 
                          placeholder="Mention specific compliance needs (HIPAA, PCI), or complex migration requirements..."
                          className="min-h-[140px] text-lg bg-background border-2 focus:border-accent transition-all resize-none"
                          value={formData.specificRequirements}
                          onChange={(e) => setFormData({...formData, specificRequirements: e.target.value})}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-8 border-t-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={handleBack} 
                      disabled={step === 0}
                      className="h-14 px-8 font-bold border-2"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    {step < STEPS.length - 1 ? (
                      <Button 
                        type="button" 
                        size="lg"
                        onClick={handleNext}
                        disabled={step === 0 && (!formData.businessType || !formData.currentHosting)}
                        className="h-14 px-8 font-bold bg-primary text-white hover:bg-primary/90"
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    ) : (
                      <Button type="submit" size="lg" className="h-14 px-10 font-bold bg-accent text-primary hover:bg-accent/90" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                            Analyzing Requirements...
                          </>
                        ) : (
                          <>
                            Generate Recommendation
                            <Sparkles className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white text-primary shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-none animate-in zoom-in-95 duration-700">
              <CardHeader className="text-center pt-12 pb-8 border-b-2 bg-accent/5">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
                  <CheckCircle2 className="text-primary w-12 h-12" />
                </div>
                <CardTitle className="text-4xl font-headline font-bold text-primary mb-2">Architectural Blueprint</CardTitle>
                <div className="inline-block px-6 py-2 bg-primary text-white rounded-full text-xl font-bold">
                  {result.recommendedPackage}
                </div>
              </CardHeader>
              <CardContent className="p-10 space-y-10">
                <div className="space-y-4">
                  <h4 className="font-bold text-2xl flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-accent rounded-full" />
                    Strategic Rationale
                  </h4>
                  <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line bg-background/50 p-8 rounded-2xl border-2 italic">
                    "{result.reasoning}"
                  </p>
                </div>
                
                <div className="bg-primary/5 p-10 rounded-3xl border-2 border-primary/10">
                  <h4 className="font-bold text-2xl mb-4">Implementation Roadmap</h4>
                  <p className="text-lg text-primary/80 mb-8 leading-relaxed font-medium">
                    {result.suggestedNextSteps}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button size="lg" className="h-16 px-10 bg-accent text-primary hover:bg-accent/90 font-black text-lg flex-1 shadow-lg shadow-accent/20">
                      Deploy This Configuration
                    </Button>
                    <Button variant="outline" size="lg" onClick={reset} className="h-16 px-10 border-2 font-bold flex items-center gap-2">
                      <RefreshCcw size={20} />
                      Refine Parameters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
