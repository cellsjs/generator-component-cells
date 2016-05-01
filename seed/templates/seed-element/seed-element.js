(function() {

  'use strict';

  Polymer({

    is: 'seed-element',
<% if (i18n) { %>
    behaviors: [
      Polymer.i18nBehavior
    ],
<% } %>
    properties: {
      /**
       * Describes the title of the element, but is really just an excuse to
       * show off JSDoc annotations.
       */
      heading: {
        type: String,
        value: 'Cells'
      }
    }
  });

})();
