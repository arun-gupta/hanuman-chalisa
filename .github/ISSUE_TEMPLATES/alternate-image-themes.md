# Create Alternate Image Theme Sets with Different Page Renders

## Description
Create alternative image sets for all 43 verses based on different artistic themes, with corresponding website page renders for each theme.

## Goals

1. **Multiple Image Sets** - Create complete 43-image sets in different artistic styles
2. **Theme Switcher** - Allow users to switch between different visual themes
3. **Separate Page Renders** - Generate different versions of the site for each theme

## Image Requirements

### Files Needed Per Theme
- **43 images total:**
  - 2 opening dohas: `doha_01.jpg`, `doha_02.jpg`
  - 40 main verses: `verse_01.jpg` through `verse_40.jpg`
  - 1 closing doha: `doha_closing.jpg`

### Technical Specs
- **Format:** JPG or PNG
- **Resolution:** 800×600px (or similar aspect ratio)
- **File Size:** Under 500KB per image
- **Color Space:** sRGB
- **Quality:** High quality, devotional imagery

## Theme Ideas

### 1. Traditional Indian Art
- Classical painting styles
- Madhubani, Tanjore, Rajasthani miniature
- Rich colors, intricate patterns
- Traditional iconography

### 2. Modern Minimalist
- Clean, simple designs
- Geometric patterns
- Symbolic elements
- Limited color palette
- Contemporary aesthetic

### 3. Photographic
- Real locations (temples, nature)
- Devotional photography
- High-quality landscapes
- Spiritual imagery

### 4. Abstract Spiritual
- Sacred geometry
- Mandalas and yantras
- Abstract patterns
- Meditative visuals

### 5. Watercolor Devotional
- Soft, flowing watercolor style
- Gentle colors
- Artistic interpretation
- Peaceful aesthetic

### 6. 3D Rendered
- Modern 3D art
- Cinematic scenes
- Epic depictions
- Blender/Cinema 4D style

### 7. Comic/Illustrated
- Narrative storytelling style
- Sequential art approach
- Character-focused
- Engaging for younger audiences

### 8. Black & White
- High contrast monochrome
- Classic artistic style
- Timeless aesthetic
- Print-friendly

## Directory Structure

```
images/
├── traditional/       # Traditional Indian art theme
│   ├── doha_01.jpg
│   ├── verse_01.jpg
│   └── ...
├── minimalist/        # Modern minimalist theme
│   ├── doha_01.jpg
│   ├── verse_01.jpg
│   └── ...
├── photographic/      # Photographic theme
│   ├── doha_01.jpg
│   ├── verse_01.jpg
│   └── ...
└── [theme-name]/      # Additional themes
    ├── README.md      # Theme description
    ├── doha_01.jpg
    ├── verse_01.jpg
    └── ...
```

## Page Render Implementation

### Option 1: Theme Switcher
- Single site with theme selector dropdown
- JavaScript switches image paths dynamically
- Saves user preference in localStorage
- Default theme

### Option 2: Separate Deployments
- Deploy multiple versions:
  - `https://arun-gupta.github.io/hanuman-chalisa/` (default)
  - `https://arun-gupta.github.io/hanuman-chalisa-traditional/`
  - `https://arun-gupta.github.io/hanuman-chalisa-minimalist/`
- Each deployment uses different image set
- Cross-links between versions

### Option 3: Subdirectories
- Serve different themes from subdirectories:
  - `/traditional/`
  - `/minimalist/`
  - `/photographic/`
- Navigation between themes

### Option 4: Build-time Configuration
- Use Jekyll/build configuration
- Generate multiple outputs
- Each with different theme

## Implementation Steps

1. **Choose Theme(s)** to work on
2. **Create Sample Images** (3-5 verses) for feedback
3. **Get Approval** on artistic direction
4. **Complete Full Set** (all 43 images)
5. **Create Theme Directory** with README
6. **Implement Theme Switcher** or separate render
7. **Test** across devices
8. **Documentation** on how to use/switch themes
9. **Submit Pull Request**

## Tools for Image Generation

- **Midjourney** - AI image generation (current approach)
- **DALL-E 3** - OpenAI image generation
- **Stable Diffusion** - Open source AI generation
- **Traditional Art** - Scan and digitize
- **Photography** - Original photos
- **Digital Art** - Photoshop, Procreate, Krita
- **3D Software** - Blender, Cinema 4D

## Quality Criteria

- [ ] Complete set of 43 images per theme
- [ ] Consistent style within theme
- [ ] Appropriate to verse content
- [ ] Devotional and respectful tone
- [ ] High quality and clear imagery
- [ ] Proper file naming
- [ ] README describing theme and creator
- [ ] Theme switcher or separate render functional
- [ ] Responsive on mobile devices
- [ ] Documentation for users

## Bonus Features

- Preview thumbnails of each theme
- Gallery view of all images in a theme
- Download option for image sets
- Print-friendly theme
- Accessibility considerations (alt text, contrast)

## Labels
- enhancement
- content creation
- good first issue (for sample images)
- help wanted

## Related
- See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
- See [tech-stack.md](../docs/tech-stack.md) for Midjourney workflow
