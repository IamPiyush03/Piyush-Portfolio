import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

export const runtime = "nodejs"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = parsed.data

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const toEmail = process.env.CONTACT_TO_EMAIL || "piyushdhondge3@gmail.com"
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>"

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    })

    if (error) {
      console.error("Resend email error", error)
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unable to process request" },
      { status: 500 }
    )
  }
}


