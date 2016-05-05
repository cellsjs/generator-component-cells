document.addEventListener('WebComponentsReady', function() {
  // set component properties here
  var el = Polymer.dom(this.root).querySelector('seed-element');
});

<% if (i18n) { %>
var selectLang = Polymer.dom(this.root).querySelector('select');

// Demo i18n
selectLang.addEventListener('change', function(){
  document.documentElement.lang = this.value;
  I18nMsg.lang = document.documentElement.lang;
});
<% } %>
