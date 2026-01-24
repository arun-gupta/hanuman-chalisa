# Generate Audio Recitations for All Verses

## Description
Create audio recitations for all 43 verses of the Hanuman Chalisa using ElevenLabs or similar AI voice synthesis service.

## Requirements

### Files Needed
- **86 total audio files** (2 per verse):
  - 2 opening dohas × 2 = 4 files
  - 40 main verses × 2 = 80 files
  - 1 closing doha × 2 = 2 files

### File Format
- **Format:** MP3
- **Quality:** 128kbps minimum
- **Two versions per verse:**
  - `[verse]_full.mp3` - Full speed, natural recitation
  - `[verse]_slow.mp3` - Slow speed for learning

### Naming Convention
```
audio/doha_01_full.mp3
audio/doha_01_slow.mp3
audio/doha_02_full.mp3
audio/doha_02_slow.mp3
audio/verse_01_full.mp3
audio/verse_01_slow.mp3
...
audio/verse_40_full.mp3
audio/verse_40_slow.mp3
audio/doha_closing_full.mp3
audio/doha_closing_slow.mp3
```

## Recommended Tool

**ElevenLabs** - AI voice synthesis with Hindi support
- Subscription: $5-330/month based on usage
- Natural-sounding voice generation
- Rate/pace adjustment for slow version
- See [tech-stack.md](../docs/tech-stack.md) for details

## Workflow

1. Select/create appropriate voice (devotional, clear tone)
2. Input Devanagari text for each verse
3. Generate full-speed version
4. Adjust rate/pace and generate slow-speed version
5. Export as MP3 (128kbps minimum)
6. Place in `/audio/` directory
7. Follow naming convention exactly
8. Test audio playback on website
9. Submit pull request with all files

## Acceptance Criteria

- [ ] All 86 audio files created
- [ ] Correct file names
- [ ] MP3 format, 128kbps+ quality
- [ ] Full speed versions are natural and clear
- [ ] Slow speed versions are  enunciated for learning
- [ ] Audio plays correctly on website
- [ ] File sizes reasonable (under 1MB each preferred)

## Labels
- enhancement
- content creation
- good first issue

## Related
See [tech-stack.md](../docs/tech-stack.md) for technology details.
