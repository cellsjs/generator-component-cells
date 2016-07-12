var templateBind = document.getElementById('tbind');

// The dom-change event signifies when the template has stamped its DOM.
templateBind.addEventListener('dom-change', function() {
  // auto binding template is ready
  templateBind.set('greeting', 'Try declarative!');
});

document.addEventListener('WebComponentsReady', function() {
  // set component properties here
});
