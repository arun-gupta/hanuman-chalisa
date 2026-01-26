# Adding New Image Themes

This guide explains how to add new image themes to the Hanuman Chalisa website.

## Overview

The website supports multiple image themes, allowing users to choose their preferred artistic style for verse illustrations. The theme system is designed to be extensible, making it easy to add new visual styles.

## Current Themes

- **Modern Minimalist** (default) - Contemporary spiritual aesthetics with saffron orange and clean backgrounds

## Theme Directory Structure

All images are organized by theme in the `images/` directory:

```
images/
├── modern-minimalist/
│   ├── title-page.png
│   ├── opening-doha-01.png
│   ├── opening-doha-02.png
│   ├── verse-01.png
│   ├── verse-02.png
│   ├── ... (verse-03.png through verse-40.png)
│   └── closing-doha.png
└── [new-theme-name]/
    ├── title-page.png
    ├── opening-doha-01.png
    └── ... (same structure)
```

## Steps to Add a New Theme

### 1. Generate Images

Create all 47 images for the new theme:
- 1 title page (`title-page.png`)
- 2 opening dohas (`opening-doha-01.png`, `opening-doha-02.png`)
- 40 verses (`verse-01.png` through `verse-40.png`)
- 1 closing doha (`closing-doha.png`)

**Image Requirements:**
- Format: PNG
- Resolution: 1024x1024 or higher (square aspect ratio)
- Consistent artistic style across all images
- Culturally respectful representation
- High quality, suitable for web display

**Prompt Guidelines:**
- See [image-prompts.md](image-prompts.md) for base prompts for each verse
- Adapt the base prompts to your chosen artistic style
- Maintain consistency in color palette, composition, and visual elements

### 2. Create Theme Directory

Create a new directory under `images/` with your theme name:

```bash
mkdir images/your-theme-name
```

**Naming Convention:**
- Use lowercase with hyphens: `traditional-art`, `watercolor-style`, `modern-abstract`
- Keep it concise and descriptive
- Avoid special characters or spaces

### 3. Add Images to Directory

Copy all 47 images to the new theme directory with the correct filenames:

```bash
images/your-theme-name/
├── title-page.png
├── opening-doha-01.png
├── opening-doha-02.png
├── verse-01.png
├── verse-02.png
├── ... (through verse-40.png)
└── closing-doha.png
```

### 4. Update Theme Configuration

Edit `_data/themes.yml` to add your new theme:

```yaml
modern-minimalist:
  name_en: "Modern Minimalist"
  name_hi: "आधुनिक न्यूनतम"
  description_en: "Contemporary spiritual aesthetics with saffron orange and clean backgrounds"
  description_hi: "केसरिया नारंगी और साफ पृष्ठभूमि के साथ समकालीन आध्यात्मिक सौंदर्यशास्त्र"
  folder: "modern-minimalist"
  default: true

your-theme-name:
  name_en: "Your Theme Name"
  name_hi: "आपकी थीम का नाम"
  description_en: "Description of your theme in English"
  description_hi: "हिन्दी में आपकी थीम का विवरण"
  folder: "your-theme-name"
  default: false
```

**Configuration Fields:**
- `name_en`: English name shown in the theme selector
- `name_hi`: Hindi name shown in the theme selector
- `description_en`: Brief description in English (optional, for future use)
- `description_hi`: Brief description in Hindi (optional, for future use)
- `folder`: Directory name under `images/` (must match exactly)
- `default`: Set to `true` for only one theme (the default), `false` for others

### 5. Update Documentation

Add your theme to [image-prompts.md](image-prompts.md):

```markdown
## Available Themes

### Modern Minimalist (Default)
- Contemporary spiritual aesthetics
- Saffron orange primary color
- Clean, minimalist backgrounds
- Modern Devanagari typography

### Your Theme Name
- [Description of artistic style]
- [Key visual characteristics]
- [Color palette notes]
- [Any special features]
```

### 6. Test the Theme

1. Build and serve the site locally:
   ```bash
   jekyll serve
   ```

2. Open the site in your browser: `http://localhost:4000/hanuman-chalisa/`

3. Test theme switching:
   - Click the theme selector dropdown in the header (🎨)
   - Select your new theme
   - Verify all images load correctly
   - Navigate through several verses to ensure consistency
   - Check that the theme persists after page reload
   - Test on mobile devices

4. Verify image quality:
   - Check that images display clearly
   - Ensure no distortion or pixelation
   - Verify colors render correctly
   - Test on different screen sizes

### 7. Commit and Push

Once tested, commit your changes:

```bash
git add images/your-theme-name/
git add _data/themes.yml
git add docs/image-prompts.md
git commit -m "Add [Your Theme Name] image theme

- Generate all 47 images in [style description]
- Add theme configuration to themes.yml
- Update documentation

Co-Authored-By: [Your Name] <your-email@example.com>"
git push origin main
```

## Theme Ideas

Here are some potential themes for future development:

### Traditional Indian Art
- Classic devotional painting style
- Rich colors, gold accents
- Traditional iconography
- Inspired by Mughal miniatures or Madhubani art

### Watercolor
- Soft, flowing watercolor aesthetic
- Gentle colors, artistic brush strokes
- Dreamy, contemplative mood
- Hand-painted feel

### Pencil Sketch
- Black and white pencil drawings
- Detailed line work
- Classical sketch aesthetic
- Timeless, artistic approach

### Contemporary Digital Art
- Vibrant digital illustration
- Modern color palettes
- Dynamic compositions
- Graphic novel style

### Photorealistic
- Realistic 3D rendered scenes
- Dramatic lighting
- Cinematic composition
- High detail and texture

### Abstract Spiritual
- Abstract geometric patterns
- Sacred geometry
- Mandala-inspired designs
- Symbolic representation

## Best Practices

### Image Quality
- Use consistent resolution across all images in a theme
- Optimize file sizes (use PNG compression)
- Ensure images load quickly on mobile devices
- Test on retina/high-DPI displays

### Artistic Consistency
- Maintain consistent style across all 47 images
- Use a cohesive color palette
- Keep visual motifs recognizable
- Ensure Hanuman is identifiable in each verse

### Cultural Sensitivity
- Research traditional Hindu iconography
- Respect religious symbolism
- Avoid inappropriate or disrespectful representations
- Consider consulting with cultural advisors

### Accessibility
- Ensure good contrast for visibility
- Consider color-blind friendly palettes
- Provide clear visual hierarchy
- Test readability on various devices

## File Size Guidelines

To ensure good performance:
- Target file size: 200-500 KB per image
- Use PNG compression tools (like TinyPNG)
- Balance quality and file size
- Test total page load time with all images

## Troubleshooting

### Images Not Showing
- Check that folder name in `themes.yml` matches the directory name exactly
- Verify all 47 images have correct filenames
- Check file permissions (should be readable)
- Clear browser cache and reload

### Theme Not Appearing in Selector
- Verify `themes.yml` syntax (proper YAML formatting)
- Check for typos in theme configuration
- Ensure Jekyll rebuilt the site (may take 1-2 minutes on GitHub Pages)
- Check browser console for JavaScript errors

### Images Load Slowly
- Compress image files (use tools like TinyPNG or ImageOptim)
- Consider reducing image resolution if above 1024x1024
- Optimize PNG files for web
- Test on slower connections

## Contributing

We welcome contributions of new image themes! Please:
1. Follow this guide carefully
2. Test thoroughly before submitting
3. Include clear documentation
4. Respect cultural and religious significance
5. Submit a pull request with your theme

For questions or assistance, please [open an issue](https://github.com/arun-gupta/hanuman-chalisa/issues) on GitHub.

---

**Last Updated:** January 2026
