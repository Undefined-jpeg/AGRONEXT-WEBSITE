import { NextResponse } from "next/server"
import { chatSchema } from "@/lib/validations/chat"

const DORMANT_REPLIES = {
  tr: "Bu özellik yakında aktif olacak.",
  en: "This feature will be available soon.",
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json()
    const parsed = chatSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: { tr: "Geçersiz istek", en: "Invalid request" } },
        { status: 400 }
      )
    }

    const enabled = process.env.ENABLE_PRICING_AI === "true"

    if (!enabled) {
      const locale = req.headers.get("accept-language")?.startsWith("en")
        ? "en"
        : "tr"
      return NextResponse.json({ reply: DORMANT_REPLIES[locale] })
    }

    // Infrastructure placeholder — wire Vercel AI SDK + Claude when ENABLE_PRICING_AI=true
    // Example (currently unreachable):
    // const { anthropic } = await import("@ai-sdk/anthropic")
    // const { generateText } = await import("ai")
    // const { text } = await generateText({
    //   model: anthropic("claude-3-5-sonnet-latest"),
    //   prompt: parsed.data.message,
    // })
    // return NextResponse.json({ reply: text })

    return NextResponse.json({ reply: DORMANT_REPLIES.tr })
  } catch {
    return NextResponse.json(
      {
        error: {
          tr: "Sunucu hatası. Lütfen daha sonra tekrar deneyin.",
          en: "Server error. Please try again later.",
        },
      },
      { status: 500 }
    )
  }
}
