document.addEventListener('WebComponentsReady', function() {
  // set component properties here
  var el = Polymer.dom(this.root).querySelector('seed-element');
  el.set('project', {title: 'Cells', image: '../images/cells.svg'});

  var demo = document.getElementById('demo');

<% if (i18n) { %>
  demo.setDocumentLang = function(e) {
    document.documentElement.lang = e.target.value;
    I18nMsg.lang = e.target.value;
  };
<% } %>
});
