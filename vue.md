- Vue instance:
  `var vm = new Vue({ // options })` vm: view model

* just know that all Vue components are also Vue instances, and so accept the same options object (except for a few root-specific options).
* When this data changes, the view will re-render. It should be noted that properties in data are only reactive if they existed when the instance was created.

- Each Vue instance goes through a series of initialization steps when it’s created:
  - it needs to set up data observation,
  - compile the template,
  - mount the instance to the DOM
  - update the DOM when data changes.
- All lifecycle hooks are called with their this context pointing to the Vue instance invoking it.
- Don’t use arrow functions on an options property or callback
- interpreted as plain HTML - data bindings are ignored. **Note that** you cannot use v-html to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.
- Directives are special attributes with the v- prefix. Directive attribute values are expected to be **a single JavaScript expression** (with the exception of v-for)
- Some directives can take **an “argument”**, denoted by a colon`:` after the directive name.For example: `v-bind:href` and `v-on:click`
- `Dynamic Arguments:` it is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets: For example `<a v-bind:[attributeName]="url"> ... </a>` and `<a v-on:[eventName]="doSomething"> ... </a>`
