(function() {

  'use strict';

  Polymer({

    is: 'seed-element',

    properties: {
      /**
       * Chosen endpoint to make requests to. Check providers.
       * @type {String}
       */
      endpoint: {
        type: String
      },

      /**
       * Response of the data provider by data binding.
       * @type {}
       */
      dp2response: {
        type: ,
        observer: '_responseObserver'
      },

      /**
       * Error of the data provider by data binding.
       * @type {}
       */
      dp2error: {
        type: ,
        observer: '_errorObserver'
      }
    },

    /**
     * Initializes the data providers.
     */
    starterMethod: function() {
      dp.generateRequest();
      dp2.generateRequest();
    },

    /**
     * Listener for 'response' event from data provider.
     * @param  {Event} response
     */
    _onResponse: function(e) {
      // fire CDM
    },

    /**
     * Listener for 'error' event from data provider.
     * @param  {Event} error
     */
    _onError: function(e) {
      // fire error
    },

    /**
     * Observer for 'last-response' property from data provider by data binding.
     * @param  {Event} response
     */
    _responseObserver: function(e) {
      // fire CDM
    },

    /**
     * Observer for 'last-error' property from data provider by data binding.
     * @param  {Event} error
     */
    _errorObserver: function(e) {
      // fire error
    }
  });
}());
