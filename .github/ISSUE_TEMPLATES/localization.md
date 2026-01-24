# Create Localized Versions of the Website

## Description
Create localized versions of the Hanuman Chalisa website in multiple languages, making the content accessible to devotees worldwide.

## Supported Languages (Priority Order)

### Tier 1: Indian Languages
1. **Hindi** - Native language of the Hanuman Chalisa
2. **Tamil** - Large Hanuman devotee community
3. **Telugu** - Significant devotional tradition
4. **Bengali** - Rich cultural connection
5. **Marathi** - Tulsidas's region
6. **Kannada** - Strong devotional following
7. **Gujarati** - Large devotee population
8. **Malayalam** - South Indian tradition

### Tier 2: International Languages
9. **Spanish** - Large global audience
10. **French** - International reach
11. **Portuguese** - Brazil and other regions
12. **German** - European audience
13. **Russian** - Growing interest

### Tier 3: Other Languages
14. **Nepali** - Cultural connection
15. **Indonesian** - Large Hindu population
16. **Thai** - Buddhist-Hindu syncretism
17. **Japanese** - Growing spiritual interest
18. **Chinese (Simplified)** - Large potential audience

## Content to Localize

### UI Elements
- Navigation menus
- Button labels
- Headers and footers
- Error messages
- Tooltips

### Page Content
- Homepage introduction
- Verse explanations
- Practical applications
- Recitation guidelines
- Documentation

### What NOT to Localize
- Original Devanagari text (keep as is)
- Simplified transliteration (keep in Roman script)
- Image files (universal)
- Audio files (Devanagari recitation)

## Implementation Approaches

### Option 1: Jekyll i18n Plugin
- Use `jekyll-multiple-languages-plugin`
- Separate language files
- URL structure: `/hi/`, `/ta/`, `/es/`
- Automatic language switching

### Option 2: Separate Repositories
- Fork for each language
- Independent deployments
- `hanuman-chalisa-hi`, `hanuman-chalisa-ta`, etc.
- Cross-links between versions

### Option 3: Subdirectories
- Language-specific subdirectories
- `/en/`, `/hi/`, `/ta/`, etc.
- Manual language switching
- Single repository

### Option 4: GitHub Pages + Jekyll Collections
- Use collections for each language
- Dynamic switching
- Metadata in front matter

## File Structure Example

```
_i18n/
├── en/
│   ├── index.md
│   ├── verses/
│   │   ├── verse_01.md
│   │   └── ...
│   └── docs/
│       ├── guide.md
│       └── background.md
├── hi/
│   ├── index.md
│   ├── verses/
│   │   ├── verse_01.md
│   │   └── ...
│   └── docs/
│       └── ...
└── [lang-code]/
    └── ...
```

## Translation Requirements

### Quality Standards
- **Accurate:** Faithful to original meaning
- **Cultural:** Appropriate cultural context
- **Devotional:** Maintain respectful tone
- **Clear:** Easy to understand
- **Consistent:** Terminology consistency

### Translator Qualifications
- Native speaker or fluent in target language
- Understanding of Hindu/Sanatan Dharma concepts
- Familiarity with Hanuman Chalisa
- Translation or localization experience preferred

## Localization Workflow

1. **Choose Language** to work on
2. **Set up** language directory structure
3. **Translate** UI elements first
4. **Translate** homepage and introduction
5. **Translate** verse explanations (sample first)
6. **Review** for accuracy and cultural appropriateness
7. **Test** website in target language
8. **Add** language selector to UI
9. **Document** translation guidelines
10. **Submit** pull request

## Technical Implementation

### Language Selector UI
```html
<select id="language-selector">
  <option value="en">English</option>
  <option value="hi">हिन्दी (Hindi)</option>
  <option value="ta">தமிழ் (Tamil)</option>
  <option value="es">Español (Spanish)</option>
  <!-- Add more languages -->
</select>
```

### URL Structure Options
- Subdomain: `hi.hanuman-chalisa.org`
- Subdirectory: `/hi/`, `/ta/`, `/es/`
- Parameter: `?lang=hi`
- Separate domain: `hanuman-chalisa-hi.com`

### SEO Considerations
- `<link rel="alternate" hreflang="hi" href="/hi/">`
- Language meta tags
- Sitemap for each language
- Proper canonical URLs

## Deliverables

Per Language:
- [ ] Complete translation of UI elements
- [ ] Translated homepage
- [ ] Translated verse explanations (all 43)
- [ ] Translated documentation
- [ ] Language selector integration
- [ ] Tested and functional
- [ ] README with translation credits

## Quality Checklist

- [ ] Accurate translation verified
- [ ] Cultural appropriateness reviewed
- [ ] Terminology consistent
- [ ] Devotional tone maintained
- [ ] No untranslated strings
- [ ] Works on mobile devices
- [ ] SEO tags implemented
- [ ] Language switcher functional
- [ ] Links between languages work
- [ ] Credits to translator(s)

## Tools & Resources

### Translation Tools
- Google Translate (for reference only)
- DeepL (better quality)
- Human translators (preferred)
- Community review

### Font Support
- Ensure fonts support target script
- Test Devanagari, Tamil, Telugu scripts
- Use web fonts if needed

### Testing
- Native speaker review
- Device testing
- Browser compatibility
- Screen reader accessibility

## Collaboration

- Multiple translators can work on same language
- Peer review process
- Community feedback welcome
- Iterative improvement

## Labels
- enhancement
- localization
- help wanted
- good first issue (for UI elements only)

## Related
- See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines
- See [tech-stack.md](../docs/tech-stack.md) for technical details

## Notes

- Start with UI elements and homepage before tackling all 43 verses
- Sample translations (3-5 verses) recommended before full commitment
- Community review highly encouraged
- Cultural consultants welcome for specialized terminology
