import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8334284191:AAGiCV0Fb1M8UQmf2yqHEzrvQHMw2xrd1EY"
const TELEGRAM_CHAT_ID = "1904929651"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, surname, service, email } = body

    // Формируем сообщение
    const message = `
🔔 <b>Новая заявка с сайта ARTISORA</b>

👤 <b>Имя:</b> ${name}
👤 <b>Фамилия:</b> ${surname}
🛠 <b>Услуга:</b> ${service}
📧 <b>Email:</b> ${email}
    `.trim()

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    })

    const telegramData = await telegramResponse.json()

    if (!telegramData.ok) {
      throw new Error(telegramData.description || "Telegram API error")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Telegram bot error:", error)
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
  }
}
