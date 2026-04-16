import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "Stop doing repetitive admin. We build AI automations that handle bookings, follow-ups, invoicing, lead capture, and reporting — so you can focus on customers.",
  keywords: ["AI automation Norwich", "business automation Norfolk", "workflow automation UK", "Zapier Make n8n Norwich"],
  openGraph: {
    title: "AI Automation — Optimalis AI",
    description: "AI automations that run your business in the background.",
    url: "https://optimalis-ai.com/services/ai-automation",
  },
};

const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation means using software to handle repetitive tasks automatically — things like sending booking confirmation emails, following up with leads, creating invoices, or logging customer data. We connect your existing tools together so they work without you having to lift a finger.",
  },
  {
    question: "Will it work with my existing tools?",
    answer:
      "Almost certainly yes. We work with 1,000+ apps including Google Workspace, Xero, QuickBooks, Shopify, WooCommerce, Calendly, Stripe, and most CRMs. If you use it, we can probably automate it.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most automation builds take 1–2 weeks from kick-off to go-live. Simpler automations can be live in days. We'll give you a realistic timeline during your discovery call.",
  },
  {
    question: "What if it breaks?",
    answer:
      "We build with reliability in mind, including error-handling and alerts if something fails. All clients get support post-launch, and we monitor your automations to catch issues before they affect your business.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. We handle all the technical setup. Once it's running, most automations require zero input from you — they just work in the background.",
  },
];

export default function AIAutomationPage() {
  return (
    <ServicePageTemplate
      title="AI Automation that runs your business in the background"
      subtitle="Stop doing repetitive admin. We build automations that handle bookings, follow-ups, invoicing, lead capture, and reporting — so you can focus on customers."
      tagline="Save 20+ hours per week"
      includes={[
        {
          iconName: "Workflow",
          title: "Workflow design",
          description: "We map out your existing processes and identify exactly where automation can save the most time.",
        },
        {
          iconName: "Plug",
          title: "No-code automation builds",
          description: "Built on Zapier, Make, or n8n — powerful automations that connect your apps without a single line of code.",
        },
        {
          iconName: "Users",
          title: "CRM integration",
          description: "Automatically log leads, update contact records, and trigger follow-ups based on customer actions.",
        },
        {
          iconName: "Mail",
          title: "Email & SMS sequences",
          description: "Automated follow-up sequences that nurture leads and re-engage past customers on autopilot.",
        },
        {
          iconName: "BarChart2",
          title: "AI-powered lead scoring",
          description: "Automatically prioritise your hottest leads so you focus your energy where it matters most.",
        },
        {
          iconName: "FileCheck",
          title: "Custom dashboards",
          description: "Live reporting dashboards so you always know what's working — no spreadsheets required.",
        },
      ]}
      useCases={[
        {
          title: "Salons drowning in DMs",
          description: "Stop manually confirming every appointment. We automate booking confirmations, reminders, and follow-up review requests.",
        },
        {
          title: "Tradies missing quotes",
          description: "Never lose a lead again. We build automations that capture enquiries, send quotes automatically, and chase follow-ups for you.",
        },
        {
          title: "Restaurants juggling reservations",
          description: "Integrate reservations, marketing, and reviews into one automated system that handles itself.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Map your workflows",
          description: "We audit your current processes and identify the highest-value automation opportunities.",
        },
        {
          step: "02",
          title: "Build & connect",
          description: "We build your automations and connect them to your existing tools — tested thoroughly before launch.",
        },
        {
          step: "03",
          title: "Launch & monitor",
          description: "Go live with confidence. We monitor performance and optimise based on real data.",
        },
      ]}
      faqs={faqs}
    />
  );
}
