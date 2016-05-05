var templateBind = Polymer.dom(this.root).querySelector('[is=dom-bind]');

// The dom-change event signifies when the template has stamped its DOM.
templateBind.addEventListener('dom-change', function() {
  // auto binding template is ready
  templateBind.set('greeting', 'Try declarative!');
});

document.addEventListener('WebComponentsReady', function() {
  // set component properties here
});
