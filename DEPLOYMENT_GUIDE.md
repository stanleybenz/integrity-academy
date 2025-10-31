# Deployment Guide - Integrity International Academy

## 📦 Deployment Package

**File:** `integrity-website-deploy.zip`

This zip file contains all necessary files and folders for uploading to your shared hosting.

---

## 📁 Contents Included

### HTML Pages
- `index.html` - Homepage
- `about.html` - About Us page
- `contact.html` - Contact page
- `admissions.html` - Admissions page
- `gallery.html` - Gallery page
- `staff.html` - Staff page
- `academics-nursery.html` - Nursery program
- `academics-primary.html` - Primary program
- `academics-secondary.html` - Secondary program
- `academics-extracurricular.html` - Extracurricular activities
- `404.html` - Custom error page

### Configuration Files
- `.htaccess` - Apache configuration (404 redirects, security headers, performance)

### Assets Folder
- `assets/css/` - Stylesheets (theme.css)
- `assets/js/` - JavaScript (main.js)
- `assets/images/` - Optimized images (hero, facilities, nursery, sports, gallery, leadership)
- `assets/icons/` - Logo and favicons

---

## 🚀 Deployment Steps

### Step 1: Upload Files

1. **Extract the zip file** on your local computer
2. **Connect to your hosting** via FTP/cPanel File Manager
3. **Upload all files and folders** to your website's root directory (usually `public_html` or `www`)

**Important:** 
- Maintain the folder structure (especially `assets/` folder)
- Upload `.htaccess` file (it may be hidden, make sure to show hidden files)

### Step 2: File Permissions

Set permissions:
- **Folders:** 755
- **Files:** 644
- **.htaccess:** 644

### Step 3: Verify Upload

Check that these exist in your root directory:
- All `.html` files
- `.htaccess` file
- `assets/` folder with subfolders

### Step 4: Test Your Website

1. **Homepage:** Visit your domain (should load `index.html`)
2. **Forms:** Test contact form and newsletter subscription
3. **404 Page:** Visit a wrong URL (e.g., `yoursite.com/test`)
4. **Navigation:** Click through all menu items

---

## ⚙️ Important Configuration

### FormSubmit Email

Forms are configured to send emails to:
- **Email:** `info@integrityintlacademygombe.ng`

**Make sure:**
- This email address exists and is accessible
- Check spam folder for first submissions
- FormSubmit sends up to 1,000 emails/month (free tier)

---

## 📋 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Newsletter forms submit successfully
- [ ] Emails are received
- [ ] 404 page displays for wrong URLs
- [ ] All images load properly
- [ ] Navigation works on all pages
- [ ] Mobile responsiveness works
- [ ] Contact page scrolls smoothly

---

## 🔧 Troubleshooting

### Forms Not Working
- Verify FormSubmit is accessible (not blocked)
- Check email inbox (including spam)
- Verify email address is correct in forms

### 404 Page Not Showing
- Ensure `.htaccess` file is uploaded
- Check Apache mod_rewrite is enabled
- Verify ErrorDocument directive in `.htaccess`

### Images Not Loading
- Check `assets/images/` folder is uploaded
- Verify file paths in HTML
- Check file permissions (644)

### CSS/JS Not Loading
- Check `assets/css/` and `assets/js/` folders uploaded
- Verify file paths in HTML
- Clear browser cache

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all files uploaded correctly
3. Check file permissions
4. Review `.htaccess` configuration

---

## 🎉 After Deployment

Once deployed:
1. Test all forms thoroughly
2. Monitor email inbox for submissions
3. Check 404 page functionality
4. Test on mobile devices
5. Share your website!

---

**Deployment Date:** _________________

**Deployed By:** _________________

**Notes:**
___________________________________________________________
___________________________________________________________

