# Generate Printable PDF of Complete Hanuman Chalisa

## Description
Create a single, beautifully formatted PDF document containing all 43 verses of the Hanuman Chalisa for printing and offline reading.

## Content to Include

For each verse, include:
1. **Image** - Verse illustration
2. **Devanagari Text** - Original Hindi in Devanagari script
3. **Simplified Transliteration** - Roman script version
4. **Literal Translation** - Direct English translation
5. **Interpretive Meaning** - Abridged version (key essence only, not full story)

## Content to Exclude

- Audio files (not applicable to PDF)
- Pronunciation tips (audio-related)
- Full "Story Behind the Verse" section (use abridged version in Interpretive Meaning)
- Ramayana citations (optional, keep if space allows)
- Recitation guidelines (can include general guidelines in introduction)

## Format Requirements

### Layout
- **Page Size:** A4 or Letter
- **Orientation:** Portrait
- **Margins:** 1 inch all sides
- **Font:** Professional, readable font with Devanagari support

### Structure
1. **Cover Page**
   - Title: "Hanuman Chalisa: A Comprehensive Guide"
   - ॐ श्री हनुमते नमः
   - Brief introduction
   - Attribution (Claude Code + human review)

2. **Introduction**
   - About Hanuman Chalisa
   - How to use this guide
   - Credits and acknowledgments

3. **Opening Dohas** (2 dohas)
   - Each doha on new page or section

4. **Main Verses** (40 verses)
   - Consistent formatting per verse
   - Page breaks as appropriate

5. **Closing Doha**
   - Final prayer

6. **Back Matter**
   - Resources and references
   - GitHub repository link

### Design Elements
- Clean, devotional aesthetic
- Good use of whitespace
- Color or black & white (both versions preferred)
- Headers/footers with page numbers
- Consistent typography

## Technical Approach

### Option 1: Pandoc + Markdown
```bash
pandoc verses/*.md -o hanuman-chalisa.pdf --template=custom.tex
```

### Option 2: LaTeX
- Direct LaTeX compilation
- Full control over layout
- Excellent Devanagari support

### Option 3: HTML → PDF
- Generate HTML version
- Use wkhtmltopdf or similar
- CSS for print media

### Option 4: Python (ReportLab/WeasyPrint)
- Programmatic PDF generation
- Good for automation
- Flexible layout control

## Deliverables

- [ ] `hanuman-chalisa.pdf` - Complete PDF file
- [ ] Place in `/downloads/` directory
- [ ] Add download link on website homepage
- [ ] README documenting how PDF was generated
- [ ] Source files/scripts for regeneration

## Quality Criteria

- [ ] All 43 verses included
- [ ] Devanagari text displays correctly
- [ ] Images embedded properly
- [ ] Consistent formatting throughout
- [ ] Professional appearance
- [ ] File size reasonable (under 20MB)
- [ ] Printable quality (300 DPI for images)
- [ ] Table of contents with hyperlinks
- [ ] Accessible (PDF/UA compliance preferred)

## Bonus Features (Optional)

- Bookmarks for navigation
- Searchable text
- Multiple language versions
- Dark mode / light mode versions
- Mobile-optimized version
- ePub format in addition to PDF

## Labels
- enhancement
- documentation
- good first issue

## Related
- See [verse-structure.md](../docs/verse-structure.md) for content structure
- See [tech-stack.md](../docs/tech-stack.md) for technologies used
