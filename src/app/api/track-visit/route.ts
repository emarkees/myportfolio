import { headers } from "next/headers";

// Simple in-memory rate limiter (resets on redeploy — good enough for a portfolio)
const recentVisitors = new Map<string, number>();
const RATE_LIMIT_MS = 60 * 60 * 1000; // 1 hour per unique IP

// Cleanup stale entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamp] of recentVisitors) {
    if (now - timestamp > RATE_LIMIT_MS) {
      recentVisitors.delete(key);
    }
  }
}, 10 * 60 * 1000);

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const body = await request.json();

    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limit: skip if we already notified for this IP recently
    const lastVisit = recentVisitors.get(ip);
    if (lastVisit && Date.now() - lastVisit < RATE_LIMIT_MS) {
      return Response.json({ ok: true, skipped: true });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials not configured");
      return Response.json({ ok: false, error: "Not configured" }, { status: 500 });
    }

    // Build a clean notification message
    const page = body.page || "/";
    const referrer = body.referrer || "Direct";
    const userAgent = headersList.get("user-agent") || "Unknown";
    const timestamp = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Detect device type from user agent
    const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
    const deviceType = isMobile ? "📱 Mobile" : "💻 Desktop";

    // Extract browser name
    const browserMatch = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera|Brave)\/?\s*(\d+)/i);
    const browser = browserMatch ? browserMatch[1] : "Unknown Browser";

    const message = [
      `🔔 *Portfolio Visitor*`,
      ``,
      `📄 *Page:* \`${page}\``,
      `🌐 *Referrer:* ${referrer}`,
      `${deviceType} • ${browser}`,
      `🕐 *Time:* ${timestamp}`,
      `🔗 *IP:* \`${ip}\``,
    ].join("\n");

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      console.error("Telegram API error:", err);
      return Response.json({ ok: false, error: "Telegram error" }, { status: 502 });
    }

    // Mark this IP as recently notified
    recentVisitors.set(ip, Date.now());

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Track visit error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
