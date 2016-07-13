(function() {

  'use strict';

  Polymer({

    is: 'seed-element',

    properties: {
      /**
       * Chosen environment to make requests to. Check providers.
       * @type {String}
       */
      environment: {
        type: String
      },

      /**
       * Response of the data provider by data binding.
       * @type {}
       */
      response: {
        type: ,
        observer: '_responseObserver'
      },

      /**
       * Error of the data provider by data binding.
       * @type {}
       */
      error: {
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
     * Listener for 'response' event from data provider by event.
     * @param  {Event} response
     */
    _onResponse: function(e) {
      // fire CDM
    },

    /**
     * Listener to 'error' event from data provider by event.
     * @param  {Event} error
     */
    _onError: function(e) {
      // fire error
    },

    /**
     * Observer for 'response' event from data provider by data binding.
     * @param  {Event} response
     */
    _responseObserver: function(e) {
      // fire CDM
    },

    /**
     * Observer to 'error' event from data provider by data binding.
     * @param  {Event} error
     */
    _errorObserver: function(e) {
      // fire error
    }
  });
}());
