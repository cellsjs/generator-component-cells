(function() {
  'use strict';

  document.addEventListener('WebComponentsReady', function() {
    var serviceForm = document.querySelector('cells-service-caller-form');

    serviceForm.set('service', {
      component: 'seed-element',
      name: 'seed-element',
      params: [
        {
          name: 'param1',
          required: true
        }, {
          name: 'param2',
          required: false
        }
      ],
      requestMethod: 'starterMethod',
      events: ['event1', 'event2'],
      mock: function() {

        /*
        Use serviceForm.mockComponent to set up mocks.
        You may want to create a mock file and overwrite your component's DP's _computeURL and _getRequestProperties so you can GET the mock file as below (which will preserve the DP's regular flow).
        You may instead overwrite your DP's generateRequest method to fire a 'response' event with a mock payload (if your DM listens to its DP's event); or have the generateRequest method return a fulfilled promise with a mock payload; or set your DP's `last-response` property with a mock value (if your DM observes `last-response`).
        */

        serviceForm.mockComponent.$.dp._computeURL = function() {
          return 'mocks/mocks.json' //you need a mock.json file
        };
        serviceForm.mockComponent.$.dp.endpoint = ''; //triggers _computeURL
        serviceForm.mockComponent.$.dp._getRequestProperties = function() {
          return {}; //defaults to method: 'GET' and handleAs: 'json'
        };

        //if necessary, call your component's 'starterMethod'
        serviceForm.mockComponent[serviceForm.service.requestMethod]();
      }
    });
  });
}());
