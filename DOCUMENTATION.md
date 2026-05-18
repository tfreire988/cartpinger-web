# CartPinger — Installation & Setup Guide

Estimated time: 30–45 minutes (most of it is waiting for Meta to verify your business, not actual work).

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Install the plugin](#2-install-the-plugin)
3. [Create your Meta Business account](#3-create-your-meta-business-account)
4. [Add a WhatsApp Business number](#4-add-a-whatsapp-business-number)
5. [Get your Access Token and Phone ID](#5-get-your-access-token-and-phone-id)
6. [Configure CartPinger in WordPress](#6-configure-cartpinger-in-wordpress)
7. [Enable the flows](#7-enable-the-flows)
8. [Create message templates in Meta](#8-create-message-templates-in-meta)
9. [Verify it works](#9-verify-it-works)
10. [Installation FAQ](#10-installation-faq)

---

## 1. Prerequisites

Before you start, confirm you have:

- WordPress 6.2 or higher
- WooCommerce 7.0 or higher
- PHP 8.1 or higher (check at WordPress → Tools → Site Health)
- A phone number **that is not already registered on WhatsApp** (can be a new mobile number, a VoIP line, or your business landline)
- A [Meta Business Manager](https://business.facebook.com) account (free)

> **Note about the number:** If your personal number already has WhatsApp installed, you can't use it directly. The easiest option is to buy a low-cost prepaid SIM or use a VoIP number (Twilio, Vonage, etc.).

---

## 2. Install the plugin

### Option A — From WordPress.org (recommended)

1. In your WordPress dashboard, go to **Plugins → Add New**.
2. Search for `CartPinger`.
3. Click **Install Now**, then **Activate**.

### Option B — Manual installation

1. Download the plugin ZIP from [github.com/tfreire988/whatscom/releases](https://github.com/tfreire988/whatscom/releases).
2. In WordPress go to **Plugins → Add New → Upload Plugin**.
3. Select the downloaded ZIP and click **Install Now**.
4. Click **Activate Plugin**.

After activating, you'll see **CartPinger** in the WordPress sidebar menu.

---

## 3. Create your Meta Business account

This is the longest part, but Meta makes it fairly guided.

### 3.1 Create the Business Manager

1. Go to [business.facebook.com](https://business.facebook.com) and log in with your personal Facebook account (you need one to create the Business Manager).
2. Click **Create account**.
3. Fill in your business name, your name, and your business email.
4. Confirm the email you'll receive.

### 3.2 Create an app in Meta for Developers

1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps).
2. Click **Create app**.
3. Select the **Business** type.
4. Give it a name (e.g. `CartPinger MyStore`) and select your newly created Business Manager.
5. In the app dashboard, find the **WhatsApp** product and click **Set up**.

### 3.3 Verify your business with Meta

Meta requires verifying that your business is real. Most legitimate stores are approved within 1–3 days.

1. In Business Manager, go to **Settings → Security Center**.
2. Click **Start verification**.
3. Enter your business details: legal name, address, website, and phone number.
4. Meta will ask for a supporting document. Any of these will work:
   - Business registration certificate (articles of incorporation, LLC operating agreement, etc.)
   - Bank statement with the business name
   - Utility bill (electricity, gas, phone) in the business name
5. Upload the document and submit the request.

> **Waiting time:** Meta takes between 1 and 7 business days to verify. You'll receive an email when it's done. You don't need to do anything else until then.

---

## 4. Add a WhatsApp Business number

Once your business is verified:

1. In your app dashboard on Meta for Developers, go to **WhatsApp → Setup**.
2. In the **Phone numbers** section, click **Add phone number**.
3. Enter the number you'll use (the one without WhatsApp installed).
4. Choose how to receive the verification code: **SMS** or **Voice call**.
5. Enter the 6-digit code you receive.

Your number is now registered as a WhatsApp Business number.

---

## 5. Get your Access Token and Phone ID

CartPinger needs two pieces of information to connect to the Meta API:

### Permanent Access Token

1. Go to [business.facebook.com/settings/system-users](https://business.facebook.com/settings/system-users).
2. Click **Add** to create a system user. Name it `cartpinger-bot` and assign the **Employee** role.
3. Click **Generate new token**.
4. Select your WhatsApp app.
5. Enable the `whatsapp_business_messaging` permission.
6. Click **Generate token** and **copy the token** that appears — it's only shown once.

> Save the token somewhere safe (a password manager like Bitwarden or 1Password). If you lose it you'll need to generate a new one.

### Phone Number ID

1. In Meta for Developers, go to **WhatsApp → API Setup**.
2. In the **From** section, select your phone number.
3. Copy the **Phone Number ID** shown below it (it's a long number, e.g. `123456789012345`).

---

## 6. Configure CartPinger in WordPress

1. In WordPress, go to **CartPinger → Settings**.
2. Fill in the fields:

| Field | Value |
|-------|-------|
| **Access Token** | The token you copied in step 5 |
| **Phone Number ID** | The Phone Number ID from step 5 |
| **Webhook Verify Token** | Type any secret text (e.g. `my-secret-123`). You'll need it in the next step. |

3. Click **Save changes**.

### Set up the Webhook in Meta

To receive delivery and read confirmations, Meta needs to know your store's URL:

1. In Meta for Developers, go to **WhatsApp → Configuration → Webhooks**.
2. Click **Edit**.
3. Enter:
   - **Callback URL:** `https://yourstore.com/wp-json/cartpinger/v1/webhook`
   - **Verify token:** the same text you entered in WordPress
4. Click **Verify and save**.
5. Subscribe to the `messages` field.

---

## 7. Enable the flows

1. In WordPress, go to **CartPinger → Flows**.
2. Enable the **Abandoned cart** toggle — CartPinger will automatically send the WhatsApp 1 hour after a customer abandons their cart (if the customer gave consent at checkout).
3. Enable the **Chat widget** toggle if you want to show the floating WhatsApp button on your store.

---

## 8. Create message templates in Meta

CartPinger uses a WhatsApp template called `abandoned_cart_recovery`. Meta requires you to create and get it approved before you can send messages.

### 8.1 Access the template manager

1. Go to [business.facebook.com/wa/manage/message-templates](https://business.facebook.com/wa/manage/message-templates).
2. Select your WhatsApp Business account.
3. Click **Create template**.

### 8.2 Configure the template

| Field | Value |
|-------|-------|
| **Category** | `Utility` (recommended — faster approval and lower cost) |
| **Name** | `abandoned_cart_recovery` (exactly like this, lowercase) |
| **Language** | Your store's language (see table below) |

**Body content by language:**

| Store language | Code | Body text |
|---|---|---|
| English | `en_US` | `Hi {{1}}! You left something in your cart. Complete your purchase here: {{2}}` |
| Spanish (Spain) | `es_ES` | `¡Hola {{1}}! Dejaste algo en tu carrito. Completa tu compra aquí: {{2}}` |
| Spanish (Mexico) | `es_MX` | `¡Hola {{1}}! Dejaste algo en tu carrito. Completa tu compra aquí: {{2}}` |
| Portuguese (Brazil) | `pt_BR` | `Olá {{1}}! Você deixou algo no seu carrinho. Conclua sua compra aqui: {{2}}` |

> `{{1}}` is the customer's name and `{{2}}` is the recovery link. Don't change those placeholders.

When Meta asks for examples, enter:
- `{{1}}` → `John`
- `{{2}}` → `https://yourstore.com/?cartpinger_recover=example`

### 8.3 Pro templates (multi-message sequence)

If you have CartPinger Pro, you need to create two additional templates:

**`abandoned_cart_recovery_24h`** — coupon message at 24h:

| Code | Body text |
|---|---|
| `en_US` | `Hi {{1}}! Your cart is still waiting. Use code {{2}} for 10% off — valid 48h. Complete your order: {{3}}` |
| `es_ES` | `¡Hola {{1}}! Tu carrito sigue esperando. Usa el código {{2}} para un 10% de descuento — válido 48h. Completa tu pedido: {{3}}` |
| `pt_BR` | `Olá {{1}}! Seu carrinho ainda está esperando. Use o código {{2}} para 10% de desconto — válido 48h. Conclua seu pedido: {{3}}` |

**`abandoned_cart_recovery_48h`** — final reminder at 48h:

| Code | Body text |
|---|---|
| `en_US` | `Hi {{1}}! Last reminder — your cart expires soon. Complete your purchase: {{2}}` |
| `es_ES` | `¡Hola {{1}}! Último aviso — tu carrito está a punto de expirar. Completa tu compra: {{2}}` |
| `pt_BR` | `Olá {{1}}! Último aviso — seu carrinho está prestes a expirar. Conclua sua compra: {{2}}` |

### 8.4 Approval time

Meta takes between 1 and 24 hours to review the template. You'll receive a notification when it's approved. Until then the plugin won't be able to send messages.

> **If your store uses a language not listed above**, create the template in `en_US` — CartPinger will use it automatically as a fallback.

---

## 9. Verify it works

To run a quick test:

1. Open your store in an incognito window.
2. Add any product to the cart.
3. Go to checkout, enter a real phone number (yours) and check the WhatsApp consent checkbox.
4. **Do not complete the order** — close the tab.
5. Wait 1 hour (or reduce the time in **CartPinger → Settings → Wait time** to 1 minute for testing).
6. You should receive the WhatsApp on your phone.

> In the **CartPinger → Logs** panel you can see the status of all sent messages: pending, sent, delivered, read, or failed.

---

## 10. Installation FAQ

**The webhook doesn't verify / returns 403**
Make sure your store URL is accessible from the internet (localhost won't work). If you have a security plugin like Wordfence, it may be blocking the request — add Meta's IP to the allowlist or temporarily disable the firewall to test.

**Meta is asking me to verify my business but I don't have company documents**
If you operate as a sole trader, a government-issued tax registration document or any official invoice that includes your name and tax identification number will work.

**The message arrives but the recovery link doesn't work**
Check that in **CartPinger → Settings** the base URL of your store is correct (no trailing slash). If you use HTTPS, make sure your SSL certificate is active.

**How many free conversations do I get?**
Meta gives 1,000 service conversations per month for free. For abandoned carts, the category is "marketing", which costs approximately $0.025 per conversation in the US. The first 1,000 marketing conversations are also free when you sign up.

**I'm not receiving the phone number verification code**
Try the voice call option instead of SMS. If the number is VoIP, some providers block short-code SMS; voice calls work better.

---

## Support

If you get stuck on any step, reach out directly at [info@cartpinger.com](mailto:info@cartpinger.com) or open an issue at [github.com/tfreire988/whatscom/issues](https://github.com/tfreire988/whatscom/issues).

I reply within 24 hours.
