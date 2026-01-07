# Website Customization Guide

This guide will help you customize your DesignStudio website with your own information.

## Quick Start Customization

### 1. Update Contact Information

**File: `src/components/Contact.tsx`**

Replace these placeholder values:
- Line 17: `YOUR_PHONE_NUMBER` - Your WhatsApp number (format: country code + number, e.g., 1234567890)
- Line 85: `YOUR_PHONE_NUMBER` - Same WhatsApp number
- Line 95: `your.email@example.com` - Your email address

**File: `src/components/Footer.tsx`**

- Line 91: `your.email@example.com` - Your email address
- Line 97: `YOUR_PHONE_NUMBER` - Your WhatsApp number
- Line 102: `+123 456 7890` - Your display phone number

### 2. Update Social Media Links

**File: `src/components/Footer.tsx`**

Replace the social media URLs (lines 27-50):
- Instagram: Replace `https://instagram.com` with your Instagram profile
- Facebook: Replace `https://facebook.com` with your Facebook page
- LinkedIn: Replace `https://linkedin.com` with your LinkedIn profile
- Twitter: Replace `https://twitter.com` with your Twitter profile

### 3. Change Brand Name

Search and replace "DesignStudio" with your business name in:
- `src/components/Navbar.tsx` (line 31)
- `src/components/Footer.tsx` (line 13)
- `index.html` (title and meta tags)

### 4. Update Pricing

**File: `src/components/Services.tsx`**

Update the `price` field for each service (around lines 19, 31, 43, 55, 67, 79)

**File: `src/components/Shop.tsx`**

Update product prices in the `products` array (starting around line 8)

### 5. Customize Services

**File: `src/components/Services.tsx`**

Edit the `services` array to:
- Change service titles
- Update descriptions
- Modify features lists
- Adjust pricing

### 6. Add Your Portfolio Items

**File: `src/components/Portfolio.tsx`**

Currently uses placeholder designs. To add real portfolio items:
- Replace the gradient placeholders with actual image URLs
- Update titles and categories
- You can add image URLs using services like Imgur or host them

### 7. Customize Digital Products

**File: `src/components/Shop.tsx`**

Update the `products` array with your actual digital products:
- Change titles and descriptions
- Update pricing
- Modify features lists

### 8. Update Hero Section

**File: `src/components/Hero.tsx`**

- Line 17-22: Update the headline and subtext
- Lines 38-51: Update the statistics (Projects, Clients, etc.)

### 9. Change Colors

The site uses blue as the primary color. To change it:

**Option 1: Simple color swap**
- Find and replace `blue-` with your preferred Tailwind color (e.g., `green-`, `purple-`)

**Option 2: Custom colors**
Edit `tailwind.config.js` to add custom colors

### 10. Update Page Title & SEO

**File: `index.html`**

Update these meta tags for better SEO:
- Line 7: Page title
- Line 8: Description
- Line 9: Keywords
- Lines 10-17: Social media sharing info

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       - Navigation menu
│   ├── Hero.tsx         - Hero section with headline
│   ├── Services.tsx     - Services listing
│   ├── Portfolio.tsx    - Portfolio gallery
│   ├── Shop.tsx         - Digital products
│   ├── Contact.tsx      - Contact form
│   └── Footer.tsx       - Footer
├── App.tsx              - Main app component
├── index.css            - Global styles
└── main.tsx             - App entry point
```

## Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ No database required
✅ Fast loading
✅ SEO-friendly
✅ Modern, clean design
✅ WhatsApp integration
✅ Easy to customize

## Support

All files are well-commented and beginner-friendly. Simply search for placeholder text like "YOUR_PHONE_NUMBER" or "your.email@example.com" to find areas that need customization.

## Tips

1. Start with contact information - this is the most important
2. Test the WhatsApp button after updating your phone number
3. Update social media links or remove icons you don't use
4. Keep the design clean - don't add too much content
5. Test on mobile devices after making changes
6. Update the page title and meta description for better SEO
