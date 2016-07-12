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
        value: ''
      }
    },

    /**
     * Custom handler for response, to be executed into cells-ajax-behavior response handler as a callback
     * Optional
     */
    _customHandleResponse: function(request) {

    },

    /**
     * Custom handler for error, to be executed into cells-ajax-behavior error handler as a callback
     * Optional
     */
    _customHandleError: function(request) {

    },

    /*
     * Return requests properties. See iron-ajax properties.
     */
    getRequestProperties: function() {
      return {
        success: this._customHandleResponse.bind(this),
        error: this._customHandleError.bind(this)
      };
    }
  });

}());
