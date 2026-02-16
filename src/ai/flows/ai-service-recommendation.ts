'use server';
/**
 * @fileOverview An AI agent that recommends suitable hosting and technical support packages based on client needs.
 *
 * - recommendServicePackage - A function that handles the service recommendation process.
 * - AiServiceRecommendationInput - The input type for the recommendServicePackage function.
 * - AiServiceRecommendationOutput - The return type for the recommendServicePackage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiServiceRecommendationInputSchema = z.object({
  businessType: z.string().describe('The type of business (e.g., e-commerce, corporate, startup, personal blog).'),
  currentHosting: z.string().describe('Their current hosting situation (e.g., no hosting, shared hosting, VPS, dedicated server, cloud, custom infrastructure).'),
  websiteTraffic: z.string().describe('Estimated website traffic (e.g., low, medium, high, very high).'),
  technicalExpertise: z.string().describe('Internal technical expertise level (e.g., none, basic, intermediate, expert).'),
  supportPriority: z.string().describe('Priority for technical support (e.g., critical (24/7), high (business hours), moderate, low).'),
  budgetConsideration: z.string().describe('Budget considerations (e.g., cost-sensitive, moderate, flexible).'),
  specificRequirements: z.string().optional().describe('Any other specific requirements or preferences.'),
});
export type AiServiceRecommendationInput = z.infer<typeof AiServiceRecommendationInputSchema>;

const AiServiceRecommendationOutputSchema = z.object({
  recommendedPackage: z.string().describe('The recommended hosting and technical support package.'),
  reasoning: z.string().describe('A detailed explanation for the recommendation, addressing how it meets the client\'s needs.'),
  suggestedNextSteps: z.string().describe('Clear next steps for the client to learn more or proceed (e.g., "Schedule a free consultation", "View our pricing plans", "Contact our sales team").'),
});
export type AiServiceRecommendationOutput = z.infer<typeof AiServiceRecommendationOutputSchema>;

export async function recommendServicePackage(input: AiServiceRecommendationInput): Promise<AiServiceRecommendationOutput> {
  return aiServiceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceRecommendationPrompt',
  input: { schema: AiServiceRecommendationInputSchema },
  output: { schema: AiServiceRecommendationOutputSchema },
  prompt: `You are an expert at recommending hosting and technical support solutions for businesses.
Your goal is to analyze the client's needs and recommend the single most suitable package from 'Elevate Tech'.

Consider the following hypothetical service packages offered by 'Elevate Tech':
-   **Basic Hosting & Standard Support**: Suitable for small websites, blogs, or startups with low traffic and basic technical needs. Offers shared hosting, email, and standard business-hours support.
-   **Pro Hosting & Enhanced Support**: Ideal for growing businesses, e-commerce sites, or applications with moderate traffic. Offers VPS hosting, advanced security, and extended support hours.
-   **Enterprise Cloud & Premium Support**: Designed for large-scale operations, high-traffic applications, or complex corporate infrastructure. Offers dedicated cloud resources, advanced monitoring, and 24/7 critical technical support.
-   **Custom Solutions & Dedicated Support**: For unique, highly specific, or highly regulated environments. Fully customized infrastructure, dedicated account manager, and on-demand expert support.

Based on the client's details provided below, recommend the single best package and explain your reasoning. Also, provide clear next steps for the client.

Client Business Type: {{{businessType}}}
Client Current Hosting: {{{currentHosting}}}
Client Website Traffic: {{{websiteTraffic}}}
Client Technical Expertise: {{{technicalExpertise}}}
Client Support Priority: {{{supportPriority}}}
Client Budget Consideration: {{{budgetConsideration}}}
{{#if specificRequirements}}Client Specific Requirements: {{{specificRequirements}}}{{/if}}

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
