// Language switching functionality

function switchLanguage(lang) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.location.href = currentUrl.toString();
}

// Set language from URL parameter on page load
function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';

    // Update select dropdown
    const select = document.getElementById('languageSelect');
    if (select) {
        select.value = lang;
    }

    // Store in localStorage for persistence
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLanguage);
