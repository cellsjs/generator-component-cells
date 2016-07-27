(function() {
  'use strict';

  Polymer({

    is: 'seed-element',

    behaviors: [
      CellsBehaviors.CellsAjaxBehavior
    ],

    properties: {
     /**
      * Service URL. Added to the endpoint by default. Implement _computeURL to override this.
      * It must be readOnly
      * @type {String}
      */
      _serviceURL: {
        type: String,
        value: '<your service Url>',
        readonly: true
      }
    },

    /**
     * Return requests properties.
     * @return {object}
     */
    _getRequestProperties: function() {
      return {
        /* See cells-ajax and iron-ajax properties. */
      };
    }
  });
}());
