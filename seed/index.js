'use strict';
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');
var elementNameValidator = require('validate-element-name');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('element-name', {
      desc: 'Tag name of the element and directory to generate.',
      required: true
    });

    this.option('skip-install', {
      desc: 'Whether bower dependencies should be installed',
      defaults: true
    });

    this.option('skip-install-message', {
      desc: 'Whether commands run should be shown',
      defaults: false
    });
  },
  validate: function () {
    this.elementName = this['element-name'];
    var result = elementNameValidator(this.elementName);

    if (!result.isValid) {
      this.emit('error', new Error(chalk.red(result.message)));
    }

    if (result.message) {
      console.warn(chalk.yellow(result.message + '\n'));
    }

    return true;
  },
  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Out of the box I include a Cells\'s component.'));

    var prompts = [{
        name: 'type',
        message: 'Which type is your component?',
        type: 'list',
        choices:[{
            name: 'UI (purely graphical)',
            value: 'ui-component',
            checked: false
          }, {
            name: 'DP (data provider)',
            value: 'dp-component',
            checked: false
          }, {
            name: 'DM (data manager)',
            value: 'dm-component',
            checked: false
          }]
      }, {
        when: function (resp) {
          return resp.type;
        },
        when: function (answers) {
          return answers.type === 'ui-component';
        },
        name: 'i18n',
        message: 'Is your component going to use i18n?',
        type: 'confirm'
      }, {
        when: function (resp) {
          return resp.i18n;
        },
        name: 'useTheme',
        message: 'Would you use a theme?',
        type: 'confirm'
      }, {
        when: function (resp) {
          return resp.useTheme;
        },
        name: 'themeName',
        message: 'What\'s your component\'s theme?',
        type: 'list',
        choices:[{
          name: 'theme-base',
          value: { theme: 'theme-base', version: '#^1.0.2' },
          checked: false
        }, {
          name: 'cells-composer-ui-theme',
          value: { theme: 'cells-composer-ui-theme', version: '#^0.4.1' },
          checked: false
        }, {
          name: 'cc-ui-theme',
          value: { theme: 'cc-ui-theme', version: '#~0.1.14' },
          checked: false
        }, {
          name: 'glomo-ui-theme',
          value: { theme: 'glomo-ui-theme', version: '#^2.0.0' },
          checked: false
        }, {
          name: 'Other...',
          checked: false
        }]
      }, {
        when: function (resp) {
          return resp.themeName === 'Other...';
        },
        name: 'themeName',
        message: 'What\'s the theme name?'
      }, {
        when: function(resp) {
          return resp.useTheme && resp.themeName.theme !== 'theme-base';
        },
        name: 'themeBase',
        message: 'Want to use on top of theme-base?',
        type: 'confirm'
      }
    ];

    this.prompt(prompts, function (props) {
      this.type = props.type;
      if (this.type === 'ui-component') {
        this.i18n = props.i18n;
        this.useTheme = props.useTheme;
        if (this.useTheme) {
          this.themeName = props.themeName.theme || props.themeName;
          this.themeVersion = props.themeName.version || '';
          this.themeBase = props.themeBase;
        }
      }

      done();
    }.bind(this));

  },
  seed: function () {
    var elementName = this.elementName;
    var themeBase = this.themeBase;
    var themeName = this.themeName;
    var elementRoute = this.type;
    var thereIsI18n = this.i18n;
    var thereIsTheme = this.useTheme;
    var isUi = (this.type === 'ui-component');
    var isDp = (this.type === 'dp-component');
    var isDm = (this.type === 'dm-component');

    this.sourceRoot(path.join(path.dirname(this.resolved), 'templates/' + elementRoute));

    var renamedElement = function (file) {
      return file.replace(/seed-element/g, elementName);
    }.bind(this);

    // Handle bug where npm has renamed .gitignore to .npmignore
    // https://github.com/npm/npm/issues/3763
    if (this.src.isFile('.npmignore')) {
      this.copy('.npmignore', '.gitignore');
    } else {
      this.copy('.gitignore', '.gitignore');
    }

    this.copy('bower.json', 'bower.json', function(file) {
      var manifest = JSON.parse(file);
      var theme_repo_url = 'https://descinet.bbva.es/stash/scm/ct/' + themeName + '.git' + this.themeVersion;

      manifest.name = elementName;
      manifest.main = [elementName + '.html'];

      if (thereIsI18n) {
        manifest.keywords.push('i18n');
      } else {
        delete manifest.dependencies['cells-i18n-behavior'];
      }

      // Add theme dependency
      if (thereIsTheme) {
        manifest.devDependencies[themeName] = theme_repo_url;
        if(!themeBase && themeName !== 'theme-base') {
          delete manifest.devDependencies['theme-base'];
        }
      }

      return JSON.stringify(manifest, null, 2);
    }.bind(this));

    this.copy('index.html', 'index.html', renamedElement);
    this.copy('README.md', 'README.md', renamedElement);
    this.copy('.editorconfig', '.editorconfig', renamedElement);
    this.copy('seed-element.js', elementName + '.js', renamedElement);
    this.copy('seed-element.html', elementName + '.html', renamedElement);

    this.copy('test/index.html', 'test/index.html', renamedElement);
    this.copy('test/basic-test.html', 'test/basic-test.html', renamedElement);
    
    this.copy('demo/js/demo.js', 'demo/js/demo.js', renamedElement);
    this.copy('demo/index.html', 'demo/index.html', renamedElement);

    if (isUi) {
      this.copy('seed-element.scss', elementName + '.scss', renamedElement);
      this.copy('demo/css/demo-styles.html', 'demo/css/demo-styles.html', renamedElement);

      if (thereIsI18n) {
        this.copy('locales/en.json', 'locales/en.json', renamedElement);
        this.copy('locales/es.json', 'locales/es.json', renamedElement);
        this.copy('demo/js/I18nMsg.js', 'demo/js/I18nMsg.js', renamedElement);
      }
    }

    if (isDm) {
      this.copy('demo/mocks/mock.js', 'demo/mocks/mock.js', renamedElement);
      this.copy('test/payload-test.html', 'test/payload-test.html', renamedElement);
    }
  },
  install: function () {
    this.installDependencies({
      npm: false,
      skipInstall: this.options['skip-install'],
      skipMessage: this.options['skip-install-message']
    });
  }
});
