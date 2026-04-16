import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Chatbots",
  description:
    "Smart, branded chatbots that handle bookings, FAQs, and lead qualification on your website, WhatsApp, or Instagram — even at 2am.",
  keywords: ["chatbots for small business UK", "WhatsApp chatbot Norwich", "AI chatbot Norfolk", "website chatbot UK"],
  openGraph: {
    title: "Chatbots — Optimalis AI",
    description: "Chatbots that answer customers 24/7.",
    url: "https://optimalis-ai.com/services/chatbots",
  },
};

const faqs = [
  {
    question: "Will the bot sound like a robot?",
    answer:
      "Not at all. We train your chatbot on your business info, your tone of voice, and your FAQs — so it sounds like a knowledgeable member of your team, not a generic AI.",
  },
  {
    question: "What can it do beyond FAQs?",
    answer:
      "Plenty. Your bot can take bookings, qualify leads, collect contact details, recommend services, handle complaints, and hand off to a real human when needed. It's a full customer service agent.",
  },
  {
    question: "Which platforms does it work on?",
    answer:
      "We deploy across your website, WhatsApp Business, Facebook Messenger, and Instagram DMs. You can have one bot everywhere, or different bots tuned for each channel.",
  },
  {
    question: "How do you keep it accurate?",
    answer:
      "We include monthly tuning in all chatbot packages — reviewing real conversations, updating the training data, and making sure the bot handles new questions correctly.",
  },
  {
    question: "What happens when it can't answer?",
    answer:
      "The bot is configured with a smooth handover flow — it collects the customer's details and either escalates to you directly or schedules a callback. No customer falls through the cracks.",
  },
];

export default function ChatbotsPage() {
  return (
    <ServicePageTemplate
      title="Chatbots that answer customers 24/7"
      subtitle="Smart, branded chatbots that handle bookings, FAQs, and lead qualification on your website, WhatsApp, or Instagram — even at 2am."
      tagline="Always on, always accurate"
      includes={[
        {
          iconName: "BotMessageSquare",
          title: "Custom bot design",
          description: "Built around your brand, your services, and your tone of voice. No generic responses.",
        },
        {
          iconName: "Settings",
          title: "Training on your business",
          description: "We feed the bot your FAQs, service details, pricing, and policies so it knows your business inside out.",
        },
        {
          iconName: "Globe",
          title: "Multi-channel deployment",
          description: "Website chat widget, WhatsApp Business, Facebook Messenger, and Instagram DMs — all from one system.",
        },
        {
          iconName: "UserCheck",
          title: "Human handover",
          description: "Seamless escalation to a real team member when the conversation needs a human touch.",
        },
        {
          iconName: "BarChart2",
          title: "Analytics dashboard",
          description: "See exactly what customers are asking, where they drop off, and how many leads your bot is generating.",
        },
        {
          iconName: "Layers",
          title: "Monthly tuning",
          description: "We review real conversations monthly and update the bot's training to keep it sharp and accurate.",
        },
      ]}
      useCases={[
        {
          title: "Missing out-of-hours enquiries",
          description: "Customers message at midnight. Without a bot, those leads disappear. With one, they're captured and queued for you to follow up.",
        },
        {
          title: "Overwhelmed by repetitive questions",
          description: "If your team spends hours answering the same questions — opening hours, pricing, availability — a chatbot handles it all instantly.",
        },
        {
          title: "Wanting more bookings without hiring",
          description: "A chatbot can qualify leads and fill your calendar 24/7 without the overhead of an extra member of staff.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Train & design",
          description: "We gather your business info and build the bot's knowledge base, personality, and conversation flows.",
        },
        {
          step: "02",
          title: "Test & refine",
          description: "We run the bot through hundreds of test scenarios to iron out any edge cases before going live.",
        },
        {
          step: "03",
          title: "Deploy & optimise",
          description: "Launch across your channels, monitor real conversations, and tune monthly to keep performance high.",
        },
      ]}
      faqs={faqs}
    />
  );
}
