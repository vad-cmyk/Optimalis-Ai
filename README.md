# Optimalis AI Website

Production-ready Next.js 14 marketing website for Optimalis AI — an AI agency based in Norwich, UK.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom design tokens
- **Framer Motion** — scroll animations, section reveals, service picker
- **React Three Fiber** — particle background in hero
- **lucide-react** — icons
- **react-calendly** — booking widget
- **@vercel/analytics** — Vercel Analytics

## Environment Variables

Create `.env.local` (already exists, just fill in the values):

| Variable | Purpose | Required |
|---|---|---|
| `RESEND_API_KEY` | Email via Resend (contact form) | When adding a contact form |
| `OPENAI_API_KEY` | Wire up the chatbot to OpenAI | Optional |
| `ANTHROPIC_API_KEY` | Wire up the chatbot to Anthropic | Optional |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 tracking ID | Optional |

## Swapping Placeholder Content

### Logo
Replace `public/logo.png` with your final logo file (keep filename), or update `src` in `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`.

### OG Image
Replace `public/og-image.png` with a branded 1200×630px image. Search `og-image.png` to find all references.

### Stats / Counters
Edit `src/components/home/StatsSection.tsx` — update the `stats` array. Lines marked `// PLACEHOLDER`.

### Real AI Chatbot
Edit `src/app/api/chat/route.ts` — the `TODO` comment at the top explains how to replace canned responses with OpenAI or Anthropic.

### Google Analytics
In `src/app/layout.tsx`, uncomment the two `<Script>` blocks and replace `G-XXXXXXXXXX` with your GA4 ID.

### Calendly URL
Currently `https://calendly.com/vad-optimalis/optimalis-ai-calendar` — search `calendly.com` to update all instances.

### Contact Email
Currently `hello@optimalis-ai.com` — search to update everywhere.

### Domain
Update `metadataBase` in `src/app/layout.tsx` and `url:` fields in all page metadata once you have the live domain.

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the GitHub repo in the Vercel dashboard — it deploys automatically on push. Add environment variables under **Settings → Environment Variables**.

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout (fonts, navbar, footer, analytics)
    page.tsx                # Homepage
    globals.css
    sitemap.ts
    robots.ts
    services/
      ai-automation/page.tsx
      website-builders/page.tsx
      chatbots/page.tsx
    api/
      chat/route.ts         # Mock chatbot (replace with real AI)
  components/
    layout/Navbar.tsx
    layout/Footer.tsx
    home/HeroSection.tsx    # Video hero with particle background
    home/ServicePicker.tsx  # 300vh sticky scroll service selector
    home/WhySection.tsx
    home/StatsSection.tsx   # Animated counters (edit numbers here)
    home/ChatbotDemo.tsx
    home/HowItWorks.tsx
    home/FinalCTA.tsx       # Calendly embed
    services/ServicePageTemplate.tsx
    services/FAQ.tsx
    ui/ParticleBackground.tsx
  lib/jsonld.ts             # Structured data helpers
public/
  logo.png                  # Replace with final logo
  optimalisai.mp4
  og-image.png              # Replace with branded 1200x630 image
```
