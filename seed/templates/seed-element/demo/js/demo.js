<% if (i18n) { %>
  var selectLang = document.querySelector('select');

  // Demo i18n
  selectLang.addEventListener('change', function(){
    document.documentElement.lang = this.value;
    I18nMsg.lang = document.documentElement.lang;
  });
<% } %>
