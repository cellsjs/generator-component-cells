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
        type: <your type>,
        observer: '_responseObserver'
      },

      /**
       * Error of the data provider by data binding.
       * @type {}
       */
      dp2error: {
        type: <your type>,
        observer: '_errorObserver'
      }
    },

    /**
     * Initializes the data providers, generally by calling their generateRequest method. You may then orchestrate the promises they return, listen to their 'response' and 'error' events or observe their last-response and last-error properties.
     */
    starterMethod: function() {
      var p1 = this.$.dp.generateRequest();
      var p2 = this.$.dp2.generateRequest();
      Promise.all([p1,p2]).then(function(values) {
        console.log('Both providers have responded');
      });
    },

    /**
     * Listener for 'response' event from data provider.
     * @param {Event} response
     */
    _onResponse: function(e) {
      // fire CDM
    },

    /**
     * Listener for 'error' event from data provider.
     * @param {Event} error
     */
    _onError: function(e) {
      // fire error
    },

    /**
     * Observer for 'last-response' property from data provider by data binding.
     * @param {Event} response
     */
    _responseObserver: function(e) {
      // fire CDM
    },

    /**
     * Observer for 'last-error' property from data provider by data binding.
     * @param {Event} error
     */
    _errorObserver: function(e) {
      // fire error
    }
  });
}());
