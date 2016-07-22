(function() {

  'use strict';

  Polymer({

    is: 'seed-element',

    behaviors: [
      CellsBehaviors.CellsAjaxBehavior
    ],

    properties: {
     /**
      * Service URL. Added to the endpoint by default. Implement _computeApiUrl to override this.
      * It must be readOnly
      */
      _serviceURL: {
        type: String,
        readonly: true,
        value: '<your service Url>'
      }
    },

    /*
     * Return requests properties.
     */
    getRequestProperties: function() {
      return {
        // See cells-ajax and iron-ajax properties.
      };
    }
  });

}());
