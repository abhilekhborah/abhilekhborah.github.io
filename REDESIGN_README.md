# Website Redesign - Clean Minimal Style

Your website has been successfully redesigned to match the clean, minimal aesthetic of the reference site (Lasha Ravichander's portfolio).

## What Changed

### New Structure
The website has been converted from a Jekyll-based theme (Minimal Mistakes) to a **pure HTML/CSS portfolio** with:

- **index.html** - Home page with introduction, profile, and news section
- **publications.html** - Publications and research papers with tagged links (PDF, Code, Slides, Website)
- **about.html** - Background, education, experience, and interests
- **contact.html** - Contact information and social media links

### Design Features

#### Visual Style
- **Color Scheme**: Professional blue (#3b82f6), light backgrounds (#f9fafb), clean typography
- **Typography**: Roboto/Inter fonts with varied weights for visual hierarchy
- **Layout**: Responsive flexbox with max-width containers (900px) for readability
- **Spacing**: Generous padding and margins for breathing room

#### Key Components
1. **Sticky Header** - Navigation stays visible while scrolling
2. **Profile Section** - Circular image with introductory text and social links
3. **Publication Cards** - Color-coded badges (PDF, Code, Slides, Website) with hover effects
4. **Contact Section** - Icons and links for easy connectivity
5. **Responsive Design** - Mobile-friendly with adjusted layouts for smaller screens

#### Interactive Elements
- Hover effects on links and cards (color changes to blue)
- Smooth transitions (0.2s) for all interactive elements
- Icon integration (Font Awesome) for visual appeal

## How to Customize

### Update Your Information

1. **index.html**
   - Change name in header
   - Update profile image path: `./assets/profile.jpg`
   - Add your bio and introduction text
   - Update social media links (email, GitHub, Twitter, LinkedIn)

2. **publications.html**
   - Add your publications with title, authors, and venue
   - Use these label classes for badges:
     - `.label-pdf` (purple) - PDF links
     - `.label-code` (blue) - Code repositories
     - `.label-slides` (teal) - Presentation slides
     - `.label-website` (dark magenta) - Project websites

3. **about.html**
   - Add your background and education
   - List research interests and skills
   - Update education and experience sections

4. **contact.html**
   - Update email address
   - Add your location or current position
   - Update social media links

### Styling Customization

All CSS is embedded inline in each HTML file. To change colors, search for:
- `#3b82f6` - Primary blue (links, accents)
- `#f9fafb` - Light gray background
- `#111827` - Dark text
- `#643191` - PDF badge color
- `#4350c6` - Code badge color

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Update the content in the `<main>` section
3. Add a new navigation link in the header of all pages

## File Structure

```
abhilekhborah.github.io/
├── index.html              # Home page
├── publications.html       # Publications list
├── about.html             # About page
├── contact.html           # Contact page
├── assets/
│   └── profile.jpg        # Your profile image (add this)
├── _config.yml            # Old Jekyll config (no longer used)
├── _includes/             # Old Jekyll files (no longer used)
├── _layouts/              # Old Jekyll files (no longer used)
└── ...                    # Other old files can be removed
```

## Important Notes

1. **Profile Image**: Add your profile photo at `./assets/profile.jpg` (180x180px recommended)
2. **Email Links**: Replace `your-email@example.com` with your actual email
3. **Social Links**: Update all social media URLs
4. **Deployment**: The site is ready to deploy to GitHub Pages as-is
5. **Browser Support**: Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## Removing Old Files (Optional)

If you want to clean up, you can delete the old Jekyll-related files:
- `_config.yml`
- `_includes/`, `_layouts/`, `_sass/` directories
- `Gemfile`, `Gemfile.lock`
- `Rakefile`
- `minimal-mistakes-jekyll.gemspec`

However, keeping them won't affect your site's functionality.

## Next Steps

1. Add your profile photo to the `assets/` folder
2. Update all placeholder text with your actual information
3. Test locally by opening `index.html` in your browser
4. Commit and push to GitHub to deploy

Enjoy your new minimal portfolio! 🎉
