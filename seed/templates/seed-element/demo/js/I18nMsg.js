window.I18nMsg = {};
window.I18nMsg.url = '../locales';

// Demo i18n
var selectLang;

document.addEventListener('WebComponentsReady', function() {
  selectLang = Polymer.dom(this.root).querySelector('.selector');
  selectLang.addEventListener('change', function() {
    document.documentElement.lang = this.value;
    I18nMsg.lang = document.documentElement.lang;
  });
});
