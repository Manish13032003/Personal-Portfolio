# Manish Chimankar - Portfolio Website

A modern, responsive portfolio website showcasing IoT projects, skills, and experience.

## 🎨 Features Added

### ✅ Profile Photo Support
- Your photo will be displayed in the hero section
- Automatic fallback to emoji icon if photo is not found
- Responsive and optimized design

### ✅ Progress Bars with Percentages
- All programming languages show percentage values
- Animated progress bars that fill on scroll
- Live percentage counter animation
- Color-coded skill categories

### ✅ Resume Download Options
- Download button in hero section
- Resume link in navigation bar
- Floating resume button (appears on scroll)
- Download confirmation message

## 📄 How to Add Your Resume

### Step 1: Prepare Your Resume
1. Export your resume as a PDF file
2. Rename it to `Manish_Chimankar_Resume.pdf` (or keep your preferred name)

### Step 2: Add to Portfolio Folder
Place your resume PDF in the **same folder** as `index.html`:
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── your-photo.jpg
└── Manish_Chimankar_Resume.pdf  ← Add your resume here
```

### Step 3: Update Filename (if needed)
If you use a different filename, update it in `index.html`:

**Find and replace in 3 places:**
1. Line ~68: Hero section button
2. Line ~18: Navbar button  
3. Line ~530: Floating button

Change from:
```html
<a href="Manish_Chimankar_Resume.pdf" download>
```

To your filename:
```html
<a href="YOUR_RESUME_NAME.pdf" download>
```

## 🎯 Resume Download Locations

Your portfolio now has **3 places** where visitors can download your resume:

1. **Hero Section** - Orange button with 📄 icon
2. **Navigation Bar** - "Resume" link (top right)
3. **Floating Button** - Bottom right corner (appears when scrolling)

All buttons are:
- ✅ Fully functional
- ✅ Mobile responsive
- ✅ Animated with hover effects
- ✅ Show download confirmation

## 📸 How to Add Your Photo

### Option 1: Same Folder (Easiest)
1. Place your photo file in the same folder as `index.html`
2. Rename your photo to `your-photo.jpg` (or update line 63 in index.html)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Option 2: Use a Different Name
1. Open `index.html` in a text editor
2. Find line 63: `<img src="your-photo.jpg" ...>`
3. Replace `your-photo.jpg` with your actual filename
   - Example: `<img src="manish-photo.png" ...>`

### Option 3: Use Online Image
1. Upload your photo to a service (like Imgur, Cloudinary, etc.)
2. Copy the direct image URL
3. Replace `your-photo.jpg` with the full URL
   - Example: `<img src="https://i.imgur.com/yourphoto.jpg" ...>`

## 📝 Photo Recommendations

- **Size**: 500x500 pixels or larger (square works best)
- **Format**: JPG or PNG
- **Quality**: Professional headshot or casual professional photo
- **Background**: Solid color or blurred background preferred
- **File Size**: Under 1MB for faster loading

## 🚀 How to Use

1. **Open the Portfolio**
   - Double-click `index.html` to open in your browser
   - Or drag and drop `index.html` into your browser

2. **Customize Content**
   - Open `index.html` in any text editor (VS Code recommended)
   - Update your information (name, email, projects, etc.)
   - Save and refresh your browser to see changes

3. **Deploy Online** (Optional)
   - Upload all files to GitHub Pages (free hosting)
   - Or use Netlify, Vercel, or any web hosting service
   - Make sure all three files are in the same folder

## 📊 Progress Bars Explained

Each skill now shows:
- **Skill Name** (on the left)
- **Percentage** (on the right, animated)
- **Progress Bar** (fills to the percentage value)

You can adjust percentages in `index.html`:
- Find the skill you want to change
- Update both `data-progress="XX"` and `<div class="skill-percentage">XX%</div>`

Example:
```html
<div class="skill-header">
    <div class="skill-name">Python</div>
    <div class="skill-percentage">90%</div>  <!-- Change this -->
</div>
<div class="skill-bar">
    <div class="skill-progress" data-progress="90"></div>  <!-- And this -->
</div>
```

## 🎯 File Structure

```
portfolio/
├── index.html       (Main HTML file - your content)
├── styles.css       (All styling and colors)
├── script.js        (Animations and interactions)
└── your-photo.jpg   (Your profile photo - ADD THIS)
```

## 🎨 Customization Tips

### Change Colors
Open `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #00d4ff;    /* Main cyan color */
    --secondary-color: #7c3aed;  /* Purple accent */
    --accent-color: #f59e0b;     /* Orange highlights */
}
```

### Update Social Links
In `index.html`, find the social links section (around line 445) and add your URLs:
```html
<a href="https://github.com/yourname" target="_blank" class="social-link">
<a href="https://linkedin.com/in/yourname" target="_blank" class="social-link">
```

### Modify Projects
Add or remove projects by copying the project card template in `index.html` (around line 170)

## ✨ Interactive Features

- **Smooth Scrolling**: Click navigation links for smooth page transitions
- **Animated Counters**: Stats and percentages animate when scrolled into view
- **Hover Effects**: Cards lift and glow on hover
- **Mobile Menu**: Hamburger menu for mobile devices
- **Cursor Trail**: Animated cursor effect (desktop only)
- **Easter Egg**: Type "iot" anywhere on the page! 🎉

## 🐛 Troubleshooting

**Photo not showing?**
- Check that the filename matches exactly (case-sensitive)
- Make sure the photo is in the same folder as index.html
- Try using a different image format (PNG instead of JPG)
- Check browser console (F12) for errors

**Progress bars not animating?**
- Scroll down to the Skills section
- Wait 1-2 seconds for animation to trigger
- Refresh the page and try again

**Website looks broken?**
- Make sure all 3 files (HTML, CSS, JS) are in the same folder
- Don't rename the CSS or JS files
- Clear your browser cache (Ctrl+F5)

## 📱 Browser Support

Works perfectly on:
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 💡 Need Help?

If you need to customize something specific:
1. Open the file in VS Code or any text editor
2. Use Ctrl+F to find the section you want to change
3. Make small changes and test frequently
4. Keep a backup copy of the original files!

---

Built with ❤️ for Manish Chimankar
Python Developer | IoT Engineer | Data Analytics Enthusiast

**Contact**: manishchimankar13@gmail.com
**Location**: Nagpur, Maharashtra, India
