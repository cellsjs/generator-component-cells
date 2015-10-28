document.addEventListener('HTMLImportsLoaded', function() {
  // fallback language is english
  I18nMsg.lang = document.documentElement.lang || 'en';
  I18nMsg.url = '../locales';
});
