window.I18nMsg = {};
window.I18nMsg.url = '../locales';

// Demo i18n
var selectLang;

document.addEventListener('WebComponentsReady', function() {
  templateBind.changeLang = function(e) {
    document.documentElement.lang = e.target.value;
    I18nMsg.lang = e.target.value;
  };
});
