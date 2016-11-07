## Yeoman generator for Cells projects

Install:

```sh
$ npm install -g generator-component-cells@2.0-preview
```

Run:

```sh
$ yo component-cells:seed your-component-name
```

## ChangeLog
v2.1.0
* Feat - Sets basic styles (display, font-family and box-sizing) to the :host (the element itself). It also sets the box-sizing property to border-box to all the element's children
* Feat - Also force the hidden attribute to work, having :host([hidden])
* Feat - Upgrade major version of devDependency

v2.0.0
* Feat - Upgrade major version of multi-language (cells-i18n-behavior)
* Style - fix to pass linter

v1.5.0
* Feat - icons library are included as multiple choice to include during creation
* Feat - themes are multiple choice now
* Feat - point dependencies of generated components to new migrated repositories

v1.4.0
* Feat - Jenkinsfile added
* Feat - changed name of generator (generator-cells > generator-component-cells)
* Fix - in dp-component demo

v1.3.1
* Fix - in DataManagers and DataProviders templates
* Fix - html import in demo of ui-component template
* Refactor - styles of ui-component template more visible in demo/index.html

v1.3.0
* Feat - added scaffold of DataManagers and DataProviders
* Feat - upgrade a couple of dependencies
* Feat - added a default icons library

v1.2.1
* style - hide selectors in bar along with the mobile shell in demo
* feat - remove polymer import from demo index
* feat - change lang declaratively
* perf - use id to select template dom-bind

v1.2.0
* Feat - Use dom-bind as a declarative app would.
* Feat - Included a your-component-shared-styles in style of component, as an open style module to change children components' available custom properties from theme of project.
* Feat - Added an .editorconfig
* Style - Apply mobile specific styles using media queries.
* Feat - Add unresolved attribute to body.
* Feat - Empty component's starting styles (moved to demo)
* Fix - Avoid error not finding correct locales url at first.
* Feat - SVG image removed as file and put in demo, as component's content
* Feat - Update version of an available theme

v1.1.1
* Fix - Add i18n keyword to json only if i18n is selected
* Fix - cells-sass import route changed to bower_components
* Fix - variable name changed at scss (--cells-neutral-color instead of --cells-text-primary)
* Added an empty ignore property to bower.json
* Added ```coverage*``` and ```test-reports``` to .gitignore
* New dependency version for cells-i18n-behavior(#1.0.2) and theme-base(#^2.0.0)


v1.1.0
* Rename dependency and update url of it.

v1.0.0
* Gives additional option whether to use theme-base on top of selected theme, when is not theme-base
* Fix: remove dependency of theme if none is required
* Url of themes updated to Cells Themes project
* Use theme-base as replacement of a couple of theme options
* Always include WebComponentTester, therefore tests
* Initial version of component, 1.0.0
* Include 'use strict' in Polymer definition
* Use fallback value of css custom properties to assign theme-base vars, and leave a component-named-and-scoped variable as primary value
* Use external style file for demo
* Fix: initial tests
* Set properties via mocks in demo.js
* Use Polymer dom selectors

v0.10.0
* Add to demo a device shell

v0.9.1
* Optimize demo for iOS browsers (added ontouchstart and set user-select to none)
* At demo, set component properties after 'WebComponentsReady' event
* Change viewport metadata

v0.9.0
* Change of used dependency for i18n

v0.8.5
* Bug fixed: Error when no theme is selected

v0.8.4
* Add an option to list of themes

v0.8.3
* Add version to bower dependencies cells-sass and \*-themes

v0.8.2
* Add to bower package initial version
* .gitignore now ignores /coverage and cells.log (generated files from cellsjs npm package).
* Update cells-symbol

v0.8.1
* Bower package main files to be handled in an Array
* When internationalization is affirmative, add i18n keyword to bower package
* Remove universal resets in demo/index.html

v 0.8.0
* Polymer version dependency updated to 1.2.0

v 0.7.1
* js as external file... again.

v 0.7.0
* js inside html again.
* Removed iron-flex-layout dependency.
* Description an Keywords added for future documentation.
* Use of shared-styles.

v 0.6.0
* js as external file.
* Update devDependencies.
* Leave tests to the minimum.
* I18n config script as external file and imported in HEAD.
* Language selector added in demo.

v 0.5.3
* Fixes in theme implementation.

v 0.5.2
* Theme dependency moved to devDependencies.

v 0.5.1
* Prompt questions to implement theme improved.

v 0.5.0
* WebComponentTester improved.
* Prompt questions to implement i18n and theme automatically.
* .gitignore now ignores /components and /node_modules and /bower_components.
* Polymer dependency changed to ~1.0.0.
* Demo route added to inline doc at component html file.

v 0.4.0
* Removed default theme import.
* Removed default theme dependency at bower.json.


v 0.3.4
* Polymer license comments removed.


v 0.3.3
* index.html modified to show jsdoc info.


v 0.3.2
* Change polymer import html tag to index.html at demo folder instead of at component itself.


v 0.3.1
* Readme.md updated.

v 0.3.0
* Minimal cells seed structure.
