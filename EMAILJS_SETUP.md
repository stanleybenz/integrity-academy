# EmailJS Setup Guide

This website uses EmailJS to handle contact form submissions and newsletter subscriptions reliably without requiring server-side code.

## Current Implementation

- ✅ Email addresses updated to `info@integrityintlacademygombe.ng`
- ✅ EmailJS SDK integrated into all pages
- ✅ Contact form handler with EmailJS support
- ✅ Newsletter subscription handler with EmailJS support
- ✅ Fallback to `mailto:` protocol if EmailJS is not configured or fails

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

### 2. Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **Custom SMTP**
4. Follow the setup instructions
5. **Save your Service ID** (you'll need this)

### 3. Create Email Templates

#### Contact Form Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Name it: `contact_form` (or any name you prefer)
4. Set **Subject**: `Contact Form: {{subject}}`
5. Set **Content**:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Integrity International Academy website contact form.
```
6. Set **To Email**: `info@integrityintlacademygombe.ng`
7. Set **From Name**: `{{from_name}}`
8. Set **Reply To**: `{{from_email}}`
9. **Save the Template ID**

#### Newsletter Subscription Template

1. Click **Create New Template**
2. Name it: `newsletter_subscription` (or any name you prefer)
3. Set **Subject**: `Newsletter Subscription Request`
4. Set **Content**:
```
New newsletter subscription request:

Email: {{subscriber_email}}

---
This email was sent from the Integrity International Academy website newsletter subscription form.
```
5. Set **To Email**: `info@integrityintlacademygombe.ng`
6. **Save the Template ID**

### 4. Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

### 5. Update the Code

Open `assets/js/main.js` and replace the placeholder values:

#### For Contact Form (around line 221):

```javascript
emailjs.init({
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',  // ← Replace with your public key
    // ... rest stays the same
});
```

And update:
```javascript
var serviceId = 'YOUR_EMAILJS_SERVICE_ID';      // ← Replace with your Service ID
var templateId = 'YOUR_CONTACT_TEMPLATE_ID';    // ← Replace with your Contact Template ID
```

#### For Newsletter Form (around line 345):

```javascript
emailjs.init({
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',  // ← Replace with your public key (same as above)
    // ... rest stays the same
});
```

And update:
```javascript
var serviceId = 'YOUR_EMAILJS_SERVICE_ID';           // ← Replace with your Service ID (same as above)
var templateId = 'YOUR_NEWSLETTER_TEMPLATE_ID';      // ← Replace with your Newsletter Template ID
```

### 6. Test the Forms

1. Test the contact form on the contact page
2. Test the newsletter subscription form on any page
3. Check your email inbox for the test emails

## Current Behavior

- **If EmailJS is configured**: Forms will send emails directly via EmailJS
- **If EmailJS is not configured**: Forms will fallback to `mailto:` protocol (opens user's email client)
- Email address used: `info@integrityintlacademygombe.ng` (updated in code)

## Troubleshooting

### Forms not sending emails
1. Check browser console for errors
2. Verify Service ID and Template IDs are correct
3. Verify Public Key is correct
4. Check EmailJS dashboard for errors
5. Verify email service is properly connected

### Forms opening email client instead
- This is the fallback behavior when EmailJS is not configured
- Complete the setup steps above to enable EmailJS

### Rate Limits
- Free tier: 200 emails/month
- Consider upgrading if you need more

## Security Notes

- The Public Key is safe to expose in client-side code
- EmailJS handles server-side email sending securely
- No sensitive credentials are exposed in the code

## Maintenance

- Monitor email delivery in EmailJS dashboard
- Check monthly email quota usage
- Update templates as needed from EmailJS dashboard

