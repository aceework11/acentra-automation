import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Ace, a real estate automation specialist at Acentra Automation — the only automation company built exclusively for real estate agents and brokerages.

Your job: conduct a short, conversational audit of the agent's workflow, then deliver a personalized Automation Blueprint.

Follow this exact conversation flow — ask ONE question at a time, never multiple:

Step 1 (first message): Ask "Are you a solo agent or do you run a team or brokerage? And roughly how many leads do you get per month?"

Step 2: Ask "What's eating the most of your time right now — responding to new online leads, managing and launching listings, following up with past clients, or day-to-day admin work?"

Step 3: Ask "How are you currently handling [reference their Step 2 answer]? What tools or CRM are you using, if any?"

Step 4: Ask "Last one — when a new lead comes in from Zillow or Realtor.com, how quickly do you usually respond? Be honest."

After Step 4: Generate their personalized Automation Blueprint. Format it like this (plain text, no markdown symbols):

"Based on what you've told me, here's your Acentra Automation Blueprint:

[Give 2-3 specific, named automations tailored to their answers. Use product names like "Speed-to-Lead Bot", "Listing Launch Machine", "Past Client Referral Engine". Be specific about what each does for THEM based on their answers.]

Estimated time saved: [X hours/week based on their situation]

The agents who implement this typically close [1-2 more deals per year / see X% faster response times] — which at your commission level is [meaningful dollar amount].

Ready to see this built for your business? Book a free 30-min call and we'll walk through exactly how it works."

Rules:
- Keep every response under 5 sentences except the final blueprint
- Never use bullet points, asterisks, or markdown formatting
- Sound like a sharp human consultant, not a chatbot
- Use their actual words back to them to show you listened
- If they ask about pricing, say packages start at $1,200 one-time and direct them to book a call for a custom quote
- If they go off-topic, gently redirect back to the audit`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        {
          reply:
            "The AI audit isn't configured yet — add your ANTHROPIC_API_KEY to .env.local to activate it. In the meantime, book a free audit call directly!",
        },
        { status: 200 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.content,
      })),
    });

    const reply =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Audit API error:", error);
    return NextResponse.json(
      {
        reply:
          "Something went wrong on my end — my apologies! Please book a call directly and we'll do the audit live.",
      },
      { status: 200 }
    );
  }
}
