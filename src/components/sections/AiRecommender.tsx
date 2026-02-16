
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles, CheckCircle2, RefreshCcw, ArrowRight, ArrowLeft } from "lucide-react";
import { recommendServicePackage, type AiServiceRecommendationOutput } from "@/ai/flows/ai-service-recommendation";

const STEPS = [
  { id: "context", title: "Startup Context" },
  { id: "scale", title: "Scale & Team" },
];

export function AiRecommender() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiServiceRecommendationOutput | null>(null);

  const [formData, setFormData] = useState({
    businessStage: "",
    expectedUsers: "1,000",
    teamSize: "1-3",
    primaryGoal: "speed",
    budget: "minimal",
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
  };

  return (
    <section id="ai-recommender" className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Stack Blueprint Advisor</span>
            </div>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">Architecture Optimized.</h2>
            <p className="text-xl text-blue-100/70 max-w-xl mx-auto">
              Our AI engineers the ideal combination of Vercel, Supabase, and GitHub for your startup's stage.
            </p>
          </div>

          {!result ? (
            <Card className="bg-white text-primary rounded-3xl shadow-2xl border-none overflow-hidden">
              <CardHeader className="p-8 pb-0">
                <CardTitle className="text-2xl">Step {step + 1}: {STEPS[step].title}</CardTitle>
                <CardDescription>Tell us about your startup's trajectory.</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 0 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="font-bold">Startup Stage</Label>
                        <Input 
                          placeholder="e.g. Ideation, MVP, Seed, Series A" 
                          value={formData.businessStage}
                          onChange={(e) => setFormData({...formData, businessStage: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-bold">Primary Goal</Label>
                        <RadioGroup 
                          value={formData.primaryGoal}
                          onValueChange={(v) => setFormData({...formData, primaryGoal: v})}
                          className="grid grid-cols-2 gap-4"
                        >
                          {[
                            {id: "speed", label: "Speed to Market"},
                            {id: "scale", label: "Extreme Scale"},
                            {id: "data", label: "Security/Data"},
                            {id: "cost", label: "Cost Optimization"}
                          ].map((g) => (
                            <div key={g.id} className={`flex items-center space-x-2 border rounded-xl p-4 cursor-pointer transition-all ${formData.primaryGoal === g.id ? 'border-accent bg-accent/5' : ''}`}>
                              <RadioGroupItem value={g.id} id={g.id} className="sr-only" />
                              <Label htmlFor={g.id} className="cursor-pointer font-bold w-full">{g.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="font-bold">Expected Monthly Users</Label>
                        <Input 
                          placeholder="e.g. 5,000" 
                          value={formData.expectedUsers}
                          onChange={(e) => setFormData({...formData, expectedUsers: e.target.value})}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-bold">Technical Budget</Label>
                        <RadioGroup 
                          value={formData.budget}
                          onValueChange={(v) => setFormData({...formData, budget: v})}
                          className="grid grid-cols-1 gap-2"
                        >
                          {["minimal", "moderate", "aggressive"].map((v) => (
                            <div key={v} className="flex items-center space-x-2 border rounded-xl p-4 cursor-pointer">
                              <RadioGroupItem value={v} id={`budget-${v}`} />
                              <Label htmlFor={`budget-${v}`} className="capitalize font-bold cursor-pointer">{v}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-8 border-t">
                    <Button type="button" variant="ghost" onClick={handleBack} disabled={step === 0}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    {step < STEPS.length - 1 ? (
                      <Button type="button" onClick={handleNext} disabled={!formData.businessStage} className="bg-primary text-white">
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={loading} className="bg-accent text-primary hover:bg-accent/90">
                        {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
                        Generate Blueprint
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white text-primary rounded-3xl shadow-2xl border-none animate-in zoom-in-95">
              <CardHeader className="text-center pt-12 pb-8 border-b bg-accent/5">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-primary w-10 h-10" />
                </div>
                <CardTitle className="text-3xl font-bold mb-2">Recommended Stack</CardTitle>
                <div className="inline-block px-6 py-2 bg-primary text-white rounded-full font-bold">
                  {result.recommendedStack}
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-3">Architectural Rationale</h4>
                  <p className="text-muted-foreground leading-relaxed italic">"{result.reasoning}"</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-2">First Step:</h4>
                  <p className="text-primary/80 font-medium mb-6">{result.suggestedAction}</p>
                  <Button onClick={reset} variant="outline" className="w-full">
                    <RefreshCcw className="mr-2 h-4 w-4" /> Start Over
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
