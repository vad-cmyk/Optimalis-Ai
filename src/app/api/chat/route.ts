import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are the Optimalis AI assistant — a helpful, friendly, and knowledgeable chatbot for Optimalis AI, a Norwich-based AI agency that helps local UK businesses grow with AI.

Optimalis AI offers three core services:
1. AI Automation — workflows that handle bookings, follow-ups, lead capture, invoices, and admin tasks. Businesses typically save 15–25 hours a week.
2. Website Builders — fast, mobile-first, SEO-ready websites built with modern tools, typically delivered in 1–2 weeks.
3. Chatbots — smart, branded chatbots deployed on websites, WhatsApp, Facebook Messenger, and Instagram DMs, trained on the client's own business info.

Your role:
- Answer questions about what Optimalis AI does, how AI can help small businesses, and general questions about automation, websites, and chatbots.
- Be warm, concise, and conversational — like a knowledgeable team member, not a formal FAQ page.
- When relevant, encourage the visitor to book a free discovery call at: https://calendly.com/vad-optimalis/optimalis-ai-calendar
- Never make up pricing — say it's tailored per project and suggest a call.
- Keep answers short (2–4 sentences). This is a chat widget, not a blog post.
- Do not answer questions unrelated to business, AI, or Optimalis AI services.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({
        message: "I didn't catch that — could you try again?",
      });
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: message }],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ message: text });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { message: "Something went wrong on my end. Try again in a moment!" },
      { status: 500 }
    );
  }
}
