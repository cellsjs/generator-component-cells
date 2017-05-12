(function() {

  class SeedElement extends Polymer.Element {
    static get is() {
      return `seed-element`;
    }

    static get properties() {
      return {
        //the properties you know and love from Polymer
      }
    }
    static get observers() {
      return [
        //Polymer multiple observers
      ]
    }

    constructor() {
      super();
    }
  }
  customElements.define(SeedElement.is, SeedElement);
}());
