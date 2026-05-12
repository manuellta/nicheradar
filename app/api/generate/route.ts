import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { niche } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "Missing OPENAI_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `Generate Shopify niche ideas for ${niche}`,
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("OPENAI ERROR:", error);

    return Response.json(
      { error: "OpenAI request failed. Check terminal for details." },
      { status: 500 }
    );
  }
}