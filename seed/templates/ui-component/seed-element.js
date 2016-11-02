(function() {

  'use strict';

  Polymer({

    is: 'seed-element'<% if (i18n) { %>,<% } %>
<% if (i18n) { %>
    behaviors: [
      CellsBehaviors.i18nBehavior
    ]
<% } %>
  });

}());
