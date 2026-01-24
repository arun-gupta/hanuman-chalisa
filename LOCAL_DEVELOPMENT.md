# Local Development Setup

This guide helps you set up a local Jekyll environment to test changes before pushing to GitHub Pages.

## Why Local Development?

- **Faster iteration**: See changes immediately without waiting for GitHub Actions
- **Catch errors early**: Jekyll will show build errors locally before you push
- **Offline work**: Develop without internet connection

## Prerequisites

- macOS (you have this)
- Homebrew (you have this)

## Setup Steps

### 1. Install rbenv (Ruby Version Manager)

```bash
brew install rbenv ruby-build
```

### 2. Initialize rbenv in your shell

Add to your `~/.zshrc` or `~/.bash_profile`:

```bash
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc
```

Or for bash:

```bash
echo 'eval "$(rbenv init - bash)"' >> ~/.bash_profile
source ~/.bash_profile
```

### 3. Install Ruby 3.3.0

```bash
rbenv install 3.3.0
rbenv global 3.3.0
ruby -v  # Should show ruby 3.3.0
```

### 4. Install Bundler

```bash
gem install bundler
```

### 5. Install Jekyll Dependencies

```bash
cd ~/workspaces/hanuman-chalisa
bundle install
```

## Running the Local Server

### Start Jekyll Server

```bash
bundle exec jekyll serve
```

This will:
- Build your site
- Start a local web server at http://localhost:4000/hanuman-chalisa/
- Watch for file changes and rebuild automatically

### Common Options

```bash
# Serve with drafts
bundle exec jekyll serve --drafts

# Serve on a different port
bundle exec jekyll serve --port 4001

# Verbose output for debugging
bundle exec jekyll serve --verbose

# Incremental builds (faster)
bundle exec jekyll serve --incremental
```

## Testing Your Changes

1. **Start the server**: `bundle exec jekyll serve`
2. **Open browser**: http://localhost:4000/hanuman-chalisa/
3. **Make changes**: Edit files in your editor
4. **Refresh browser**: Jekyll auto-rebuilds (wait a few seconds)
5. **Check console**: Look for build errors in the terminal

## Common Build Errors

### Liquid Syntax Error

```
Liquid Exception: Liquid syntax error
```

**Fix:** Check your `{% %}` and `{{ }}` tags in templates. Use `{% raw %}{% endraw %}` for example code.

### YAML Parsing Error

```
YAML Exception reading file
```

**Fix:** Check verse files for:
- Proper indentation (2 spaces)
- Quoted strings with nested quotes need `|` block scalar notation
- No tabs (use spaces only)

### Missing Translation Key

```
Liquid error: undefined method
```

**Fix:** Check `_data/translations/*.yml` has all required keys.

## Validating Changes

Before committing:

```bash
# Build without serving (faster error checking)
bundle exec jekyll build

# Check for broken links
# (add this after implementing)

# Validate YAML in verse files
ruby -ryaml -e "Dir.glob('_verses/*.md').each { |f| YAML.load(File.read(f).split('---')[1]) }"
```

## Troubleshooting

### Port Already in Use

```bash
# Kill existing Jekyll process
lsof -ti:4000 | xargs kill -9

# Or use different port
bundle exec jekyll serve --port 4001
```

### Bundle Install Fails

```bash
# Update bundler
gem install bundler

# Clean and reinstall
rm -rf vendor/bundle
bundle install
```

### Changes Not Showing Up

```bash
# Clean Jekyll cache
bundle exec jekyll clean

# Rebuild
bundle exec jekyll build

# Hard refresh browser: Cmd+Shift+R (macOS)
```

### Ruby Version Issues

```bash
# Check current Ruby version
ruby -v

# Should be 3.3.0 or higher
# If not, check rbenv:
rbenv versions
rbenv global 3.3.0
```

## Project Structure

```
hanuman-chalisa/
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates
│   ├── default.html      # Base layout
│   └── verse.html        # Verse page layout
├── _verses/              # Verse content (YAML + Markdown)
│   ├── doha_01.md
│   ├── verse_01.md
│   └── ...
├── _data/                # Data files
│   └── translations/     # UI strings for i18n
│       ├── en.yml
│       └── hi.yml
├── assets/
│   ├── css/              # Stylesheets
│   └── js/               # JavaScript
├── index.html            # Home page
├── search.html           # Search page
├── search.json           # Search data (generated)
└── Gemfile               # Ruby dependencies
```

## Workflow

### Making Changes

1. **Edit files** in your editor
2. **Check terminal** for build errors
3. **Refresh browser** to see changes
4. **Test thoroughly**:
   - Navigate through verses
   - Test language switcher
   - Check search functionality
   - Test print layout
5. **Commit** when everything works

### Adding New Content

```bash
# Copy existing verse as template
cp _verses/verse_01.md _verses/verse_NEW.md

# Edit the new file
# Check it builds: bundle exec jekyll build
# View it locally: http://localhost:4000/hanuman-chalisa/verses/verse_NEW/
```

## Performance Tips

- Use `--incremental` for faster rebuilds
- Limit `_verses/` directory while testing layout changes
- Use `--limit_posts 5` to build fewer items during testing

## Next Steps

- Set up automated tests
- Add link checker
- Implement CI/CD with local tests before GitHub push

---

**Happy Developing!** May your builds be swift and your errors few. 🙏

**ॐ श्री हनुमते नमः**
