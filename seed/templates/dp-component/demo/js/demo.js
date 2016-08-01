(function() {
  'use strict';

  document.addEventListener('WebComponentsReady', function() {
    var serviceForm = document.querySelector('service-caller-form');

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
      requestMethod: 'generateRequest',
      responseEvent: 'response',
      errorEvent: 'error'
    });
  });
}());
