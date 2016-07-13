var serviceForm = document.querySelector('service-caller-form');

serviceForm.set('service', {
  component: 'example-provider-one',
  name: 'service1',
  params: [{
    name: 'param1',
    required: true
  }, {
    name: 'param2',
    required: false
  }],
  requestMethod: 'starterMethod',
  responseEvent: 'manager-out-event-one',
  errorEvent: 'manager-error-event-one'
});
