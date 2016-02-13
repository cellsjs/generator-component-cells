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
     *
     * @type {{title: string, image: string}}
     */
     welcome: {
       type: Object,
       // Use `value` to provides a default value for a property, by setting it
       // on your element's prototype.
       //
       // If you provide a function, as we do here, Polymer will call that
       // _per element instance_.
       //
       // We do that to ensure that each element gets its own copy of the
       // value, rather than having it shared across all instances (via the
       // prototype).
       value: function() {
         return {
           title: 'Welcome to Cells',
           image: '../images/cells.svg'
         };
       }
     }
  }
});
