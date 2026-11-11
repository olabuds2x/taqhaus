/**
 * Plain-text transactional email through Resend (the provider the existing
 * contact endpoint already expects). Best-effort: returns false instead of
 * throwing, because the order record in Stripe is the source of truth.
 */
export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.ORDER_FROM_EMAIL)

export async function sendEmail(msg: { to: string; subject: string; text: string; replyTo?: string }): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  const from = process.env.ORDER_FROM_EMAIL
  if (!key || !from || !msg.to) {
    console.warn('[email] not configured; skipped:', msg.subject)
    return false
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: msg.to,
        subject: msg.subject,
        text: msg.text,
        ...(msg.replyTo ? { reply_to: msg.replyTo } : {}),
      }),
    })
    if (!res.ok) {
      console.error('[email] Resend error', res.status, await res.text().catch(() => ''))
      return false
    }
    return true
  } catch (err) {
    console.error('[email] send failed', err)
    return false
  }
}

/** Internal fulfilment inbox. */
export const teamInbox = () => process.env.ORDER_NOTIFY_EMAIL || ''
