var serviceForm = document.querySelector('service-caller-form');

serviceForm.set('service', {
  component: 'seed-element',
  name: 'service1',
  params: [{
    name: 'param1',
    required: true
  }, {
    name: 'param2',
    required: false
  }],
  requestMethod: 'generateRequest',
  responseEvent: 'response',
  errorEvent: 'error'
});
