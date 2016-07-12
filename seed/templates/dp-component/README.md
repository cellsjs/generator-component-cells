# seed-element

Data provider description.

Example:
```html
<seed-element></seed-element>
```

It exposes `last-response`, `last-error` and `last-request` as properties that will be updated (as the case may be) once `generateRequest` is called.
Also, It fires `response`, `error` and `request-in-progress`.
