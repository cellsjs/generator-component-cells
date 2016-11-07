(function() {

  class SeedElement extends Polymer.Element {
    static get is() {
      return `seed-element`;
    }

    static get config() {
      return {
        properties: {
            //the properties you know and love from Polymer
        },
        observers: [
          //the observers you know and love from Polymer
        ]
      }
    }

    constructor() {
      super();
    }
  }
  customElements.define(SeedElement.is, SeedElement);
}());
