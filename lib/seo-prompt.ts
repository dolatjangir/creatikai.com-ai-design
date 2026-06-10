export interface SEOPromptInput {
  pageName: string;
  canonicalUrl: string;
  pageContent: string;
}

export interface SEOPromptOutput {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

export const getSEOSystemPrompt = (): string => `
You are an elite SEO strategist and copywriter. Your job is to analyze webpage content and generate complete, production-ready SEO metadata.

## OUTPUT FORMAT
Return ONLY a valid JSON object matching this exact schema. No markdown, no explanation, no code blocks.

{
  "metaTitle": "string (50-60 chars, primary keyword near front, click-worthy)",
  "metaDescription": "string (150-160 chars, actionable, soft CTA)",
  "keywords": ["string", "string", "..."],
  "ogTitle": "string (Facebook-optimized, max 60 chars)",
  "ogDescription": "string (Social-friendly, max 160 chars)",
  "ogImage": "string (suggested image path)",
  "twitterTitle": "string (Twitter/X-optimized, punchy, max 60 chars)",
  "twitterDescription": "string (Twitter card description, max 160 chars)",
  "twitterImage": "string (suggested image path)"
}

## RULES
1. metaTitle: 50-60 characters. Include primary keyword in first 3 words.
2. metaDescription: 150-160 characters. End with action verb (Learn, Discover, Get, etc.).
3. keywords: 5-8 relevant search terms. Include long-tail keywords.
4. ogTitle: Slightly more engaging than metaTitle for social sharing.
5. ogDescription: Conversational tone for Facebook/LinkedIn.
6. twitterTitle: Punchy, hashtag-friendly if natural.
7. twitterDescription: Concise, under 160 chars.
8. ogImage/twitterImage: Use format: /images/og-{page-slug}.jpg
`;

export const buildUserPrompt = (input: SEOPromptInput): string => `
## INPUT DATA

- Page Name: "${input.pageName}"
- Canonical URL: "${input.canonicalUrl}"
- Page Content:
"""
${input.pageContent}
"""

Generate SEO metadata now.
`;