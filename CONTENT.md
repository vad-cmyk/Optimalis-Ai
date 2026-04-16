# Content Checklist — Things to Fill In

Everything in this file needs real data before the site goes fully live.

---

## URGENT (affects credibility)

- [ ] **OG Image** — `public/og-image.png` is a placeholder. Replace with a real branded 1200×630px image showing the logo + tagline on a dark background. This shows in Google, WhatsApp previews, etc.
- [ ] **Logo** — `public/logo.png` is currently the ChatGPT-generated image. Replace with your final logo file.
- [ ] **Domain** — Update `metadataBase` in `src/app/layout.tsx` to your real domain once live.

---

## Stats (homepage counters)

File: `src/components/home/StatsSection.tsx`

The four counters are placeholders. Replace with real numbers once you have data:

| Stat | Current placeholder | Replace with |
|------|--------------------|-|
| Hours saved per week | 20+ | Your real average |
| Faster customer response | 3× | Your real figure |
| AI availability | 24/7 | Keep or adjust |
| UK-based delivery | 100% | Keep if accurate |

Also update the disclaimer text on line below the heading.

---

## Testimonials

The site has no testimonials section yet. Once you have 2–3 client testimonials, add a section between `<StatsSection />` and `<ChatbotDemo />` in `src/app/page.tsx`.

Each testimonial needs: quote, client name, business name, and optionally a photo.

---

## Chatbot

File: `src/app/api/chat/route.ts`

Currently returns canned responses. To make it a real AI chatbot:
1. Add `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` to `.env.local`
2. Follow the TODO comment in the file

---

## Google Analytics

File: `src/app/layout.tsx`

Uncomment the `<Script>` blocks and replace `G-XXXXXXXXXX` with your GA4 Measurement ID from Google Analytics.

---

## Contact Email

Currently `hello@optimalis-ai.com` throughout. Search the codebase and confirm this is your live email address.

---

## Calendly URL

Currently `https://calendly.com/vad-optimalis/optimalis-ai-calendar` — already set to your real URL. Confirm it's the correct link and that the event type is published.

---

## Social Links

The footer has no social links. Add your LinkedIn, Instagram, or Facebook to `src/components/layout/Footer.tsx` when ready.

---

## Favicon

The favicon is the Next.js default. Replace `src/app/favicon.ico` with your own branded favicon (convert your logo to `.ico` at favicon.io).

---

## Service Pricing

None of the service pages mention pricing. When you're ready to publish prices (or a pricing page), add them to the relevant service page or create `/pricing/page.tsx`.
