import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Website Builders",
  description:
    "Fast, mobile-first, SEO-ready websites built with modern tools and tuned for the businesses you actually want walking through your door.",
  keywords: ["website design Norwich", "web design Norfolk", "small business website UK", "SEO website Norwich"],
  openGraph: {
    title: "Website Builders — Optimalis AI",
    description: "Websites that don't just look good — they convert.",
    url: "https://optimalis-ai.com/services/website-builders",
  },
};

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most websites are completed within 1–2 weeks from kick-off. Larger or more complex projects may take 3–4 weeks. We'll give you a precise timeline after the discovery call.",
  },
  {
    question: "Do I own the site?",
    answer:
      "Yes, 100%. Once the project is complete and payment is settled, you own the domain, the hosting, and all the code. No lock-in, no ongoing fees to us (unless you want our support retainer).",
  },
  {
    question: "Can you redesign my existing site?",
    answer:
      "Absolutely. We regularly rebuild outdated sites from scratch, preserving your content and SEO rankings where possible, and upgrading everything else.",
  },
  {
    question: "What about hosting and updates?",
    answer:
      "We'll set you up on reliable, fast hosting and show you how to make basic content updates yourself. For anything bigger, we offer affordable monthly support packages.",
  },
  {
    question: "Will my site show up on Google?",
    answer:
      "SEO is built into every site we deliver — proper structure, fast loading speeds, meta tags, and Google Business integration. We can't guarantee rankings (nobody can), but we set you up correctly from day one.",
  },
];

export default function WebsiteBuildersPage() {
  return (
    <ServicePageTemplate
      title="Websites that don't just look good — they convert"
      subtitle="Fast, mobile-first, SEO-ready websites built with modern tools and tuned for the businesses you actually want walking through your door."
      tagline="Launch in 1–2 weeks"
      includes={[
        {
          iconName: "Palette",
          title: "Custom design",
          description: "Fully bespoke designs — no templates, no drag-and-drop builders. Built to reflect your brand and your customers.",
        },
        {
          iconName: "Smartphone",
          title: "Mobile-first build",
          description: "Over 60% of web traffic is mobile. Every site we build is optimised for phones first, then desktop.",
        },
        {
          iconName: "Search",
          title: "SEO setup",
          description: "On-page SEO, fast load times, structured data, and Google Search Console setup included as standard.",
        },
        {
          iconName: "MapPin",
          title: "Google Business integration",
          description: "Connect your website to your Google Business profile to drive more local search traffic.",
        },
        {
          iconName: "CalendarCheck",
          title: "Booking forms & CMS",
          description: "Integrated booking forms, contact pages, and an easy-to-use CMS so you can update your content yourself.",
        },
        {
          iconName: "BarChart2",
          title: "Analytics & 30-day support",
          description: "Google Analytics set up from day one, plus 30 days of free post-launch support included.",
        },
      ]}
      useCases={[
        {
          title: "Businesses with outdated sites",
          description: "Your website is your shopfront. If it looks dated or loads slowly, you're losing customers before they even get in touch.",
        },
        {
          title: "No website at all",
          description: "Still relying on Facebook or word of mouth? A professional site dramatically expands your reach and credibility overnight.",
        },
        {
          title: "Sites that don't bring in enquiries",
          description: "If your site gets traffic but no bookings, it's a conversion problem — one we can solve with better design and copy.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Discovery & design",
          description: "We learn about your business, your customers, and your goals, then design a site around them.",
        },
        {
          step: "02",
          title: "Build & review",
          description: "We build the site and walk you through it, incorporating your feedback before anything goes live.",
        },
        {
          step: "03",
          title: "Launch & support",
          description: "We handle the technical launch, submit to Google, and support you for the first 30 days.",
        },
      ]}
      faqs={faqs}
    />
  );
}
