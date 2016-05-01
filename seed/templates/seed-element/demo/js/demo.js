document.addEventListener('WebComponentsReady', function() {
  // set component properties here
  var demo = document.getElementById('demo');
  demo.heading = 'Cells';

<% if (i18n) { %>
  demo.setDocumentLang = function(e) {
    document.documentElement.lang = e.target.value;
    I18nMsg.lang = e.target.value;
  };
<% } %>
});
