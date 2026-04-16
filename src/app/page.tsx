import type { Metadata } from "next";
import HeroAndServices from "@/components/home/HeroAndServices";
import WhySection from "@/components/home/WhySection";
import StatsSection from "@/components/home/StatsSection";
import ChatbotDemo from "@/components/home/ChatbotDemo";
import HowItWorks from "@/components/home/HowItWorks";
import FinalCTA from "@/components/home/FinalCTA";
import { localBusinessSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Optimalis AI — Your business, optimised by AI",
  description:
    "Norwich-based AI agency helping local businesses save time and win more customers with AI automation, custom websites, and chatbots.",
  alternates: {
    canonical: "https://optimalis-ai.com",
  },
  openGraph: {
    url: "https://optimalis-ai.com",
  },
};

export default function HomePage() {
  const jsonLd = localBusinessSchema();

  return (
    <>
      {/* LocalBusiness JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroAndServices />
      <WhySection />
      <StatsSection />
      <ChatbotDemo />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
