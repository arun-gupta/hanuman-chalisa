# Multi-Language Implementation Guide

This document outlines the steps needed to add multi-language support to the Hanuman Chalisa website.

## Overview

Currently, the site has:
- **Devanagari text**: Already in Hindi script ✓
- **UI and content**: All in English ✗

To support multiple languages (Hindi, Tamil, Telugu, Spanish, etc.), we need to translate both UI elements and content.

## Architecture: Data Files Approach

**Recommended** for GitHub Pages compatibility (no plugins needed).

### Step 1: Create Translation Data Files

Create `_data/translations/` directory with language files:

```
_data/
  translations/
    en.yml    # English (default)
    hi.yml    # Hindi
    ta.yml    # Tamil
    te.yml    # Telugu
    es.yml    # Spanish
```

### Step 2: UI Translations

**File: `_data/translations/en.yml`**
```yaml
language_name: "English"
language_code: "en"

nav:
  previous: "Previous"
  next: "Next"
  home: "All Verses"
  print: "Print"
  search: "Search"

sections:
  devanagari: "1. Original Hindi Text (Devanagari Script)"
  transliteration: "2. Simplified Transliteration"
  pronunciation: "3. Pronunciation Guide"
  word_meanings: "4. Word-by-Word Meaning"
  literal_translation: "5. Literal Translation"
  interpretive_meaning: "6. Interpretive Meaning"
  story: "7. Story Behind the Verse"
  practical_application: "9. Practical Application"

labels:
  audio_recitation: "Audio Recitation"
  coming_soon: "Coming Soon"
  key_teaching: "Key Teaching"
  when_to_use: "When to Use This Verse"
  phonetic_breakdown: "Phonetic Breakdown"
  guide_link: "For general recitation tips and guidelines, see the"
  comprehensive_guide: "Comprehensive Guide"

home:
  title: "Hanuman Chalisa: A Comprehensive Guide"
  welcome: "Welcome to the Hanuman Chalisa Guide"
  blessing: "May Lord Hanuman's blessings be with all who study and recite these sacred verses."
  read_complete: "Read Complete Chalisa"
  search_verses: "Search Verses"
  usage_guide: "Usage Guide"
  opening_dohas: "Opening Dohas"
  main_chalisa: "Main Chalisa (40 Verses)"
  closing_doha: "Closing Doha"

footer:
  blessing: "May Lord Hanuman's blessings be with all who study and recite these sacred verses."
  view_github: "View on GitHub"
  usage_guide: "Usage Guide"
  contribute: "Contribute"
```

**File: `_data/translations/hi.yml`**
```yaml
language_name: "हिन्दी"
language_code: "hi"

nav:
  previous: "पिछला"
  next: "अगला"
  home: "सभी छंद"
  print: "छापें"
  search: "खोजें"

sections:
  devanagari: "1. मूल हिंदी पाठ (देवनागरी लिपि)"
  transliteration: "2. सरलीकृत लिप्यंतरण"
  pronunciation: "3. उच्चारण मार्गदर्शिका"
  word_meanings: "4. शब्द-दर-शब्द अर्थ"
  literal_translation: "5. शाब्दिक अनुवाद"
  interpretive_meaning: "6. व्याख्यात्मक अर्थ"
  story: "7. छंद की पृष्ठभूमि की कहानी"
  practical_application: "9. व्यावहारिक अनुप्रयोग"

labels:
  audio_recitation: "ऑडियो पाठ"
  coming_soon: "जल्द आ रहा है"
  key_teaching: "मुख्य शिक्षा"
  when_to_use: "इस छंद का उपयोग कब करें"
  phonetic_breakdown: "ध्वन्यात्मक विवरण"
  guide_link: "सामान्य पाठ युक्तियों और दिशानिर्देशों के लिए, देखें"
  comprehensive_guide: "व्यापक मार्गदर्शिका"

home:
  title: "हनुमान चालीसा: एक व्यापक मार्गदर्शिका"
  welcome: "हनुमान चालीसा मार्गदर्शिका में आपका स्वागत है"
  blessing: "भगवान हनुमान का आशीर्वाद उन सभी के साथ हो जो इन पवित्र छंदों का अध्ययन और पाठ करते हैं।"
  read_complete: "पूर्ण चालीसा पढ़ें"
  search_verses: "छंद खोजें"
  usage_guide: "उपयोग मार्गदर्शिका"
  opening_dohas: "प्रारंभिक दोहे"
  main_chalisa: "मुख्य चालीसा (40 छंद)"
  closing_doha: "समापन दोहा"

footer:
  blessing: "भगवान हनुमान का आशीर्वाद उन सभी के साथ हो जो इन पवित्र छंदों का अध्ययन और पाठ करते हैं।"
  view_github: "GitHub पर देखें"
  usage_guide: "उपयोग मार्गदर्शिका"
  contribute: "योगदान करें"
```

### Step 3: Content Translations

For verse content, expand YAML fields to support multiple languages:

**Current Structure:**
```yaml
literal_translation: "Hail Hanuman, ocean of knowledge..."
interpretive_meaning: "Hanuman is described as an ocean..."
story: "Hanuman was blessed by various gods..."
```

**New Multi-Language Structure:**
```yaml
literal_translation:
  en: "Hail Hanuman, ocean of knowledge and virtues. Hail the lord of monkeys, who illuminates the three worlds."
  hi: "हनुमान की जय हो, ज्ञान और गुणों के सागर। वानरों के स्वामी की जय हो, जो तीनों लोकों को प्रकाशित करते हैं।"

interpretive_meaning:
  en: "Hanuman is described as an ocean - limitless and deep in wisdom and virtues..."
  hi: "हनुमान को एक सागर के रूप में वर्णित किया गया है - ज्ञान और गुणों में असीम और गहरे..."

story:
  en: "Hanuman was blessed by various gods with knowledge and power..."
  hi: "हनुमान को विभिन्न देवताओं द्वारा ज्ञान और शक्ति का आशीर्वाद मिला था..."

practical_application:
  teaching:
    en: "True greatness combines knowledge and virtues..."
    hi: "सच्ची महानता ज्ञान और गुणों को जोड़ती है..."
  when_to_use:
    en: "Recite this verse when seeking wisdom..."
    hi: "जब ज्ञान की तलाश हो तो इस छंद का पाठ करें..."
```

### Step 4: Language Detection & Switching

Add language parameter handling:

**URL patterns:**
- Default (English): `/verses/verse_01/`
- With language: `/verses/verse_01/?lang=hi`
- Or use cookies/localStorage to remember preference

**Language Switcher in Header:**
```html
<div class="language-switcher">
  <select id="languageSelect" onchange="switchLanguage(this.value)">
    <option value="en" {% if page.lang == 'en' %}selected{% endif %}>English</option>
    <option value="hi" {% if page.lang == 'hi' %}selected{% endif %}>हिन्दी</option>
    <option value="ta" {% if page.lang == 'ta' %}selected{% endif %}>தமிழ்</option>
    <option value="te" {% if page.lang == 'te' %}selected{% endif %}>తెలుగు</option>
    <option value="es" {% if page.lang == 'es' %}selected{% endif %}>Español</option>
  </select>
</div>
```

### Step 5: Update Templates

**File: `_layouts/verse.html` (updated)**

```liquid
{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="verse-container">
    <nav class="verse-nav">
        {% if page.previous_verse %}
        <a href="{{ page.previous_verse | relative_url }}?lang={{ lang }}" class="nav-button prev">
            ← {{ t.nav.previous }}
        </a>
        {% endif %}

        <a href="{{ '/' | relative_url }}?lang={{ lang }}" class="nav-button home">
            ☰ {{ t.nav.home }}
        </a>

        {% if page.next_verse %}
        <a href="{{ page.next_verse | relative_url }}?lang={{ lang }}" class="nav-button next">
            {{ t.nav.next }} →
        </a>
        {% endif %}
    </nav>

    <div class="verse-content">
        <h1>{{ page.title }}</h1>

        <h2>{{ t.sections.devanagari }}</h2>
        <pre>{{ page.devanagari }}</pre>

        <h2>{{ t.sections.transliteration }}</h2>
        <pre>{{ page.transliteration }}</pre>

        <h2>{{ t.sections.pronunciation }}</h2>
        <p><strong>{{ t.labels.audio_recitation }}:</strong> <em>({{ t.labels.coming_soon }})</em></p>

        <h2>{{ t.sections.word_meanings }}</h2>
        <ul>
        {% for item in page.word_meanings %}
            <li><strong>{{ item.word }}</strong> ({{ item.roman }}) - {{ item.meaning }}</li>
        {% endfor %}
        </ul>

        <h2>{{ t.sections.literal_translation }}</h2>
        {% if page.literal_translation[lang] %}
        <p>{{ page.literal_translation[lang] }}</p>
        {% else %}
        <p>{{ page.literal_translation }}</p>
        {% endif %}

        <h2>{{ t.sections.interpretive_meaning }}</h2>
        {% if page.interpretive_meaning[lang] %}
        <p>{{ page.interpretive_meaning[lang] }}</p>
        {% else %}
        <p>{{ page.interpretive_meaning }}</p>
        {% endif %}

        <h2>{{ t.sections.story }}</h2>
        {% if page.story[lang] %}
        <p>{{ page.story[lang] }}</p>
        {% else %}
        <p>{{ page.story }}</p>
        {% endif %}

        <h2>{{ t.sections.practical_application }}</h2>
        <p><strong>{{ t.labels.key_teaching }}:</strong><br>
        {% if page.practical_application.teaching[lang] %}
        {{ page.practical_application.teaching[lang] }}
        {% else %}
        {{ page.practical_application.teaching }}
        {% endif %}
        </p>

        <p><strong>{{ t.labels.when_to_use }}:</strong><br>
        {% if page.practical_application.when_to_use[lang] %}
        {{ page.practical_application.when_to_use[lang] }}
        {% else %}
        {{ page.practical_application.when_to_use }}
        {% endif %}
        </p>
    </div>
</article>
```

## Implementation Workflow

### Phase 1: Setup (1-2 hours)
1. Create `_data/translations/` directory
2. Create `en.yml` with all English strings
3. Update `_layouts/default.html` to add language switcher
4. Update `_layouts/verse.html` to use translation strings
5. Test with English (should work unchanged)

### Phase 2: Hindi Translation (2-4 hours)
1. Create `_data/translations/hi.yml`
2. Translate all UI strings to Hindi
3. Update 2-3 sample verses with Hindi content translations
4. Test Hindi language switching
5. Verify everything renders correctly

### Phase 3: Content Translation (Major Effort)
1. For each verse (`_verses/*.md`), translate:
   - `literal_translation` → Hindi, other languages
   - `interpretive_meaning` → Hindi, other languages
   - `story` → Hindi, other languages
   - `practical_application.teaching` → Hindi, other languages
   - `practical_application.when_to_use` → Hindi, other languages
2. This requires 43 verses × 5 fields × N languages
3. **Estimate**: 20-30 hours per language for quality translations

### Phase 4: Additional Languages (Variable)
1. Repeat Phase 2 & 3 for Tamil, Telugu, Spanish, etc.
2. Each language requires:
   - UI translations (~2 hours)
   - Content translations (20-30 hours)

## Translation Requirements

### UI Translations (Quick)
- Navigation labels: ~10 strings
- Section headings: ~10 strings
- Home page content: ~15 strings
- Footer: ~5 strings
- **Total**: ~40 strings per language
- **Time**: 1-2 hours per language

### Content Translations (Substantial)
- Per verse: 5-6 major text fields
- 43 verses total
- **Total**: ~250 text blocks per language
- **Time**: 20-30 hours per language (with quality translation)

## Tools for Translation

1. **Professional Translator** (Recommended for devotional content)
   - Ensures cultural and religious accuracy
   - Native speaker quality

2. **AI Translation** (DeepL, ChatGPT)
   - Quick initial translations
   - Requires human review for accuracy
   - Good for UI strings

3. **Community Contributions**
   - Open source model
   - Native speakers contribute translations
   - Quality review process

## Storage & Maintenance

**Pros of Data Files Approach:**
- ✅ Works with GitHub Pages (no plugins)
- ✅ Clean separation of translations
- ✅ Easy to add new languages
- ✅ Translators only edit YAML files

**Cons:**
- ❌ Verse files become larger with multi-language content
- ❌ More complex to maintain
- ❌ Need fallback logic (if translation missing, show English)

## Estimated Effort

| Task | Time | Who |
|------|------|-----|
| Setup architecture | 2-3 hours | Developer |
| UI translation (Hindi) | 1-2 hours | Translator |
| Content translation (Hindi) | 20-30 hours | Translator |
| UI translation (other lang) | 1-2 hours each | Translator |
| Content translation (other lang) | 20-30 hours each | Translator |

**Total for Hindi**: ~25-35 hours
**Total for 4 languages**: ~100-140 hours

## Next Steps

1. **Decide on languages** - Which languages to support initially?
2. **Find translators** - Professional or community?
3. **Phase implementation** - Start with UI, then content
4. **Quality assurance** - Review translations for accuracy
5. **Test thoroughly** - All languages across all pages

## Alternative: English + Hindi Only (Simpler)

For a quicker implementation, start with just Hindi:
- Most users likely understand Hindi or English
- Reduces translation effort by 75%
- Can add more languages later
- **Estimated effort**: 25-35 hours total

Would you like me to implement the architecture for multi-language support?
