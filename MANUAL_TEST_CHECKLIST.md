# Manual Testing Checklist

Use this checklist to test the website after deployment.

---

## ✅ Test Results Summary

**Automated Tests:**
- ✓ Contact Form: FormSubmit configured
- ✓ Newsletter Forms: 11 pages configured
- ✓ Parallax Removed: 0 parallax classes on contact page
- ✓ 404 Page: EXISTS
- ✓ .htaccess: EXISTS

---

## Manual Testing Steps

### 1. Contact Form Testing

**Location:** `contact.html`

#### Test 1.1: Valid Submission
- [ ] Fill in all required fields (Name, Email, Message)
- [ ] Add optional Subject
- [ ] Click "Send Message"
- [ ] Verify button shows "Sending..." state
- [ ] Verify redirect to `contact.html?success=true`
- [ ] Verify success alert message appears
- [ ] **Check email inbox:** `info@integrityintlacademygombe.ng`
- [ ] Verify email received with form data

#### Test 1.2: Validation Testing
- [ ] Try submitting with empty Name field → Should show error
- [ ] Try submitting with empty Email field → Should show error
- [ ] Try submitting with empty Message field → Should show error
- [ ] Try submitting with invalid email (e.g., "test@") → Should show error
- [ ] Try submitting with valid email format → Should work

#### Test 1.3: Form Behavior
- [ ] Scroll contact page up and down → Should be smooth, no jumping
- [ ] Check form fields have proper focus states
- [ ] Verify form resets after successful submission

---

### 2. Newsletter Form Testing

**Locations:** All pages with newsletter form in footer

#### Test 2.1: Valid Submission
- [ ] Navigate to `index.html`
- [ ] Enter valid email in newsletter form
- [ ] Click "Subscribe"
- [ ] Verify button shows "Subscribing..." state
- [ ] Verify redirect to `index.html?subscribed=true`
- [ ] Verify success alert message appears
- [ ] **Check email inbox:** `info@integrityintlacademygombe.ng`
- [ ] Verify subscription email received

#### Test 2.2: Test on Multiple Pages
Test newsletter form on:
- [ ] `index.html`
- [ ] `about.html`
- [ ] `contact.html`
- [ ] `admissions.html`
- [ ] `gallery.html`
- [ ] `staff.html`

#### Test 2.3: Validation Testing
- [ ] Try submitting with empty email → Should show error
- [ ] Try submitting with invalid email → Should show error
- [ ] Try submitting with valid email → Should work

---

### 3. 404 Error Page Testing

#### Test 3.1: Error Page Display
- [ ] Navigate to non-existent page (e.g., `/test-page.html` or `/wrong-url.html`)
- [ ] Verify 404.html loads correctly
- [ ] Verify error message displays
- [ ] Check page design matches site theme

#### Test 3.2: Navigation from 404
- [ ] Click "Return to Homepage" button → Should go to `index.html`
- [ ] Click "Contact Us" button → Should go to `contact.html`
- [ ] Click navigation links (About, Admissions, Gallery, Staff)
- [ ] Verify all links work correctly

#### Test 3.3: 404 Page Functionality
- [ ] Test newsletter form on 404 page
- [ ] Verify footer links work
- [ ] Check responsive design (mobile/tablet/desktop)

---

### 4. Contact Page Scroll Testing

#### Test 4.1: Smooth Scrolling
- [ ] Navigate to `contact.html`
- [ ] Scroll slowly from top to bottom
- [ ] Verify no irregular movements or jumping
- [ ] Verify no parallax effects causing position changes
- [ ] Scroll back up → Should be smooth

#### Test 4.2: Section Stability
- [ ] Scroll to "Get in Touch" section
- [ ] Verify section stays stable (no movement)
- [ ] Scroll to "Send Us a Message" section
- [ ] Verify form section stays stable
- [ ] Verify content doesn't shift unexpectedly

---

### 5. Cross-Browser Testing

Test on different browsers:
- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop/Mobile)
- [ ] Edge (Desktop)
- [ ] Mobile browser (iOS Safari)
- [ ] Mobile browser (Chrome Android)

**What to check:**
- Forms submit correctly
- Success messages appear
- 404 page displays correctly
- Contact page scrolls smoothly
- All pages load without errors

---

### 6. Mobile Responsiveness

Test on different screen sizes:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)

**What to check:**
- Forms are usable on mobile
- Navigation menu works
- 404 page is readable
- Contact page scrolls smoothly on mobile

---

### 7. Performance Testing

- [ ] Page load times are acceptable
- [ ] Forms submit without delays
- [ ] Success messages appear promptly
- [ ] No JavaScript errors in console

---

## Expected Email Format

### Contact Form Email:
**Subject:** Contact Form Submission - Integrity Academy

**Body:**
```
Name: [User's Name]
Email: [User's Email]
Subject: [Subject if provided]

Message:
[User's Message]
```

### Newsletter Subscription Email:
**Subject:** Newsletter Subscription - Integrity Academy

**Body:**
```
Email: [User's Email]
```

---

## Troubleshooting

### Forms Not Submitting:
1. Check internet connection
2. Verify FormSubmit is accessible
3. Check browser console for errors
4. Verify email address is correct

### 404 Page Not Loading:
1. Check `.htaccess` file is uploaded
2. Verify Apache mod_rewrite is enabled
3. Check server error logs
4. Test direct URL: `yoursite.com/404.html`

### Contact Page Still Jumping:
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
3. Check if parallax classes were removed
4. Verify JavaScript is loading correctly

---

## Success Criteria

All tests should pass before going live:
- ✓ Contact form sends emails successfully
- ✓ Newsletter forms send emails successfully
- ✓ Contact page scrolls smoothly
- ✓ 404 page displays for wrong URLs
- ✓ All navigation links work
- ✓ Forms validate correctly
- ✓ Success messages appear
- ✓ Site is responsive on all devices

---

**Testing Date:** _________________

**Tester:** _________________

**Notes:**
___________________________________________________________
___________________________________________________________
___________________________________________________________

