# Integrity International Academy Gombe - Website

A modern, responsive website for Integrity International Academy, a Nursery, Primary and Secondary School in Gombe State, Nigeria.

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Via CDN (no build process required)
- **Vanilla JavaScript** - No frameworks, lightweight
- **Swiper.js** - Hero image carousel
- **Static Site** - Perfect for shared hosting deployment

## Project Structure

```
Integrity/
├── index.html                  # Homepage with hero slider
├── about.html                  # About page with mission/vision
├── manager-message.html         # Manager's welcome message
├── academics-nursery.html       # Nursery department
├── academics-primary.html       # Primary department
├── academics-secondary.html     # Secondary department
├── admissions.html              # Admissions information
├── gallery.html                 # Photo gallery
├── contact.html                 # Contact form and information
├── assets/
│   ├── css/
│   │   └── theme.css           # Global theme variables and styles
│   ├── js/
│   │   └── main.js             # Site-wide JavaScript
│   ├── images/
│   │   ├── hero/               # Hero slider images (4 images)
│   │   ├── facilities/         # School facilities photos
│   │   ├── nursery/            # Nursery department photos
│   │   ├── sports/             # Sports day photos
│   │   └── leadership/         # Leadership team portraits
│   └── icons/
│       ├── logo.jpg            # School logo
│       ├── favicon-32.png      # Favicon (32x32)
│       ├── favicon-16.png      # Favicon (16x16)
│       └── apple-touch-icon.png # iOS touch icon
├── .cursorrules                # Design system guidelines
└── optimize-images.sh          # Image optimization script (macOS)
```

## Design System

All design guidelines are documented in `.cursorrules`. Key highlights:

- **Colors**: Primary Teal (#008080), Secondary Coral (#FF6F61), Dark Slate (#2F4F4F)
- **Typography**: Roboto font family, consistent size scale
- **Spacing**: 4px baseline increments
- **Components**: Consistent buttons, cards, forms, navigation

## Features

### Hero Slider
- Auto-advancing carousel (5-second intervals)
- Smooth fade transitions
- Navigation arrows and pagination dots
- Responsive (52vh mobile, 70vh desktop)
- Image captions with teal gradient overlay

### Navigation
- Responsive header with mobile menu
- Consistent navigation across all pages
- Active page highlighting
- Keyboard accessible

### Forms
- Contact form with mailto: functionality
- HTML5 validation
- Accessible labels and focus states

### Images
- Optimized for web (70% JPEG quality)
- Lazy loading for performance
- Proper alt text for accessibility
- Responsive sizing

## Editing Content

### Updating Page Content

1. **About Page** (`about.html`):
   - Edit mission, vision, values text directly in HTML
   - Update leadership team images in `assets/images/leadership/`

2. **Manager's Message** (`manager-message.html`):
   - Update welcome message text
   - Replace manager photo if needed

3. **Academics Pages**:
   - Modify curriculum descriptions
   - Update subject lists or course descriptions
   - Replace department images if needed

4. **Admissions** (`admissions.html`):
   - Update admission process steps
   - Modify required documents list
   - Update contact email (replace `info@example.com`)

5. **Contact** (`contact.html`):
   - Update address, phone, email
   - Modify office hours
   - Email address in both HTML and JavaScript (line 217 in `main.js`)

### Updating Images

#### Hero Slider Images
1. Optimize images to max 1920px width, 70% JPEG quality
2. Save to `assets/images/hero/` with names: `hero-1.jpg`, `hero-2.jpg`, etc.
3. Update HTML in `index.html` slider section (lines 72-99)
4. Update image `src` attributes and alt text

#### Gallery Images
1. Optimize to 1280px max width, 70% JPEG quality
2. Save to appropriate subfolder (`facilities/`, `nursery/`, `sports/`)
3. Update `gallery.html` with new image paths
4. Use semantic file names (e.g., `library-students.jpg`)

#### Leadership Photos
1. Optimize to 800px max width for portraits
2. Save to `assets/images/leadership/`
3. Update `about.html` leadership section

### Changing Colors

All colors are defined in `assets/css/theme.css` as CSS variables:

```css
:root {
    --color-primary: #008080;    /* Change primary teal here */
    --color-secondary: #FF6F61;   /* Change secondary coral here */
    --color-text: #2F4F4F;        /* Change text color here */
}
```

Update these values and the entire site will update automatically.

### Changing Fonts

Font family is defined in `assets/css/theme.css`:

1. Update `--font-family-sans` variable
2. Update Google Fonts link in `<head>` of all HTML files if using different font

## Deployment to Shared Hosting

### Preparation

1. **Update Contact Information**:
   - Replace all instances of `info@example.com` with actual email
   - Update phone numbers
   - Add actual school address

2. **Optimize Images** (if not already done):
   ```bash
   ./optimize-images.sh
   ```

3. **Test Locally**:
   - Open `index.html` in a browser
   - Test all pages and links
   - Verify forms work
   - Check mobile responsiveness

### Upload Process

1. **Via FTP/cPanel File Manager**:
   - Upload all HTML files to root (or `public_html/`)
   - Upload entire `assets/` folder maintaining structure
   - Ensure `.cursorrules` and other config files are included if needed

2. **File Structure on Server**:
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── manager-message.html
   ├── academics-*.html
   ├── admissions.html
   ├── gallery.html
   ├── contact.html
   └── assets/
       ├── css/
       ├── js/
       ├── images/
       └── icons/
   ```

3. **Verify Deployment**:
   - Check homepage loads correctly
   - Test slider functionality
   - Verify all images display
   - Test contact form
   - Check mobile view
   - Verify all links work

### CDN Dependencies

The site uses these CDN resources (no local files needed):
- Tailwind CSS (cdn.tailwindcss.com)
- Google Fonts (fonts.googleapis.com)
- Swiper.js (cdn.jsdelivr.net)

Ensure your hosting allows external CDN connections. If not, you'll need to download and host these locally.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Image Optimization**:
   - All hero images should be < 500KB
   - Gallery images should be < 300KB
   - Use provided `optimize-images.sh` script

2. **Caching**:
   - Set cache headers for static assets (images, CSS, JS)
   - Consider using `.htaccess` for Apache servers

3. **CDN**:
   - Consider using a CDN for images if traffic is high
   - Current setup uses CDN for libraries (good for caching)

## Accessibility

The site includes:
- Skip to content links
- ARIA labels on interactive elements
- Semantic HTML5 structure
- Keyboard navigation support
- Focus visible states
- Alt text on all images
- WCAG AA color contrast compliance

## Maintenance

### Regular Updates

1. **News/Events** (if added in future):
   - Create news section on homepage or dedicated page
   - Update content monthly/quarterly

2. **Gallery**:
   - Add new photos as events occur
   - Maintain consistent image optimization

3. **Leadership Changes**:
   - Update photos in `assets/images/leadership/`
   - Update names/titles in `about.html`

4. **Contact Info**:
   - Keep email, phone, address current
   - Update office hours if they change

## Troubleshooting

### Slider Not Working
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console for JavaScript errors
- Verify Swiper.js CDN is accessible
- Check network tab for failed resource loads

### Images Not Displaying
- Verify image paths are correct (case-sensitive on Linux servers)
- Check file permissions on server
- Ensure images are uploaded to correct directories

### Styles Not Applying
- Clear browser cache
- Verify `assets/css/theme.css` is uploaded
- Check Tailwind CDN is loading
- Check browser console for CSS errors

### Forms Not Working
- Update email address in `contact.html` and `main.js`
- Verify mailto: links work (depends on user's email client)
- Consider server-side form handler for production

## Support

For technical issues or questions about the codebase, refer to:
- Design system guidelines: `.cursorrules`
- Theme variables: `assets/css/theme.css`
- JavaScript functionality: `assets/js/main.js`

## License

All code is proprietary to Integrity International Academy.

---

**Last Updated**: 2024
**Version**: 1.0.0

