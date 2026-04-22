import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { registerSchema } from "@/lib/validations/auth"

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json()
    const parsed = registerSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: {
            tr: "Geçersiz kayıt bilgileri.",
            en: "Invalid registration data.",
            fields: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      )
    }

    const { name, email, password } = parsed.data
    const normalizedEmail = email.toLowerCase()

    const existing = await db.query.users.findFirst({
      where: eq(users.email, normalizedEmail),
    })
    if (existing) {
      return NextResponse.json(
        {
          error: {
            tr: "Bu e-posta zaten kullanılıyor.",
            en: "This email is already in use.",
          },
        },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 10)

    await db.insert(users).values({
      name,
      email: normalizedEmail,
      passwordHash,
      provider: "credentials",
      role: "farmer",
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      {
        error: {
          tr: "Sunucu hatası.",
          en: "Server error.",
        },
      },
      { status: 500 }
    )
  }
}
