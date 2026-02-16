
'use server';
/**
 * @fileOverview AI advisor for startup tech stacks using Vercel, Supabase, and GitHub.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiServiceRecommendationInputSchema = z.object({
  businessStage: z.string().describe('The stage of the startup (e.g., MVP, Seed, Growth).'),
  expectedUsers: z.string().describe('Estimated monthly active users.'),
  teamSize: z.string().describe('Size of the engineering/technical team.'),
  primaryGoal: z.string().describe('Main technical goal (e.g., speed to market, massive scalability, data security).'),
  budget: z.string().describe('Monthly budget for infrastructure.'),
});
export type AiServiceRecommendationInput = z.infer<typeof AiServiceRecommendationInputSchema>;

const AiServiceRecommendationOutputSchema = z.object({
  recommendedStack: z.string().describe('The recommended combination of Vercel, Supabase, and GitHub tiers.'),
  reasoning: z.string().describe('Why this stack is perfect for their current stage.'),
  suggestedAction: z.string().describe('First step to get started.'),
});
export type AiServiceRecommendationOutput = z.infer<typeof AiServiceRecommendationOutputSchema>;

export async function recommendServicePackage(input: AiServiceRecommendationInput): Promise<AiServiceRecommendationOutput> {
  return aiServiceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceRecommendationPrompt',
  input: { schema: AiServiceRecommendationInputSchema },
  output: { schema: AiServiceRecommendationOutputSchema },
  prompt: `You are a startup CTO advisor specializing in Vercel, Supabase, and GitHub.
Your goal is to recommend a "Launch Blueprint" for a new company.

Service Tiers to consider:
- **Starter Blueprint**: GitHub Free + Vercel Hobby + Supabase Free Tier. Perfect for MVPs and validating ideas.
- **Growth Blueprint**: GitHub Pro + Vercel Pro + Supabase Pro. Best for Seed-stage startups with active users.
- **Enterprise Blueprint**: GitHub Enterprise + Vercel Enterprise + Supabase Enterprise. For high-growth companies with strict compliance and massive scale.

Client Details:
Stage: {{{businessStage}}}
Users: {{{expectedUsers}}}
Team Size: {{{teamSize}}}
Goal: {{{primaryGoal}}}
Budget: {{{budget}}}

Provide your recommendation in a JSON object strictly following the output schema.`,
});

const aiServiceRecommendationFlow = ai.defineFlow(
  {
    name: 'aiServiceRecommendationFlow',
    inputSchema: AiServiceRecommendationInputSchema,
    outputSchema: AiServiceRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
