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
          return resp.type === 'ui-component';
        },
        name: 'i18n',
        message: 'Is your component going to use i18n?',
        type: 'confirm'
      }, {
        when: function (resp) {
          return resp.type === 'ui-component';
        },
        name: 'useTheme',
        message: 'Would you use a theme?',
        type: 'confirm'
      }, {
        when: function (resp) {
          return (resp.type === 'ui-component') && (resp.useTheme === true);
        },
        name: 'themeName',
        message: 'Which themes do you want to use?',
        type: 'checkbox',
        choices:[{
          name: 'cells-theme-base',
          value: { theme: 'cells-theme-base', version: '#^4.0.12' },
          checked: true
        }, {
          name: 'cells-composer-ui-theme',
          value: { theme: 'cells-composer-ui-theme', version: '#^1.2.1' },
          checked: false
        }, {
          name: 'cc-ui-theme',
          value: { theme: 'cc-ui-theme', version: '#^1.4.0' },
          checked: false
        }, {
          name: 'cells-glomo-theme',
          value: { theme: 'cells-glomo-theme', version: '#^4.1.3' },
          checked: false
        }]
      }, {
        when: function (resp) {
          return resp.type === 'ui-component';
        },
        name: 'useIcons',
        message: 'Would you use a icons library?',
        type: 'confirm'
      }, {
        when: function (resp) {
          return (resp.type === 'ui-component') && (resp.useIcons === true);
        },
        name: 'iconsName',
        message: 'What icons library do you want to use?',
        type: 'checkbox',
        choices:[{
          name: 'cells-icons',
          value: { name: 'cells-icons', version: '#^2.0.14' },
          checked: false
        }, {
          name: 'iron-icons',
          value: { name: 'iron-icons', version: '#^1.1.3' },
          checked: false
        }, {
          name: 'coronita-icons',
          value: { name: 'coronita-icons', version: '#^1.1.3' },
          checked: false
        }, {
          name: 'banking-icons',
          value: { name: 'banking-icons', version: '#^1.0.0' },
          checked: false
        }]
      }
    ];

    this.prompt(prompts, function (props) {
      this.type = props.type;
      if (this.type === 'ui-component') {
        this.i18n = props.i18n;
        this.useTheme = props.useTheme;
        this.useIcons = props.useIcons;

        if (this.useTheme) {
          this.themeName = props.themeName;
        }

        if (this.useIcons) {
          this.iconsName = props.iconsName;
          this.iconsVersion = props.iconsName.version || '';
        }
      }

      done();
    }.bind(this));

  },
  seed: function () {
    var elementName = this.elementName;
    // var themeBase = this.themeBase;
    var themeName = this.themeName;
    var icons = this.iconsName;
    var elementRoute = this.type;
    var thereIsI18n = this.i18n;
    var thereIsTheme = this.useTheme;
    var thereIsIcons = this.useIcons;
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
      var base_repo_url = 'ssh://git@globaldevtools.bbva.com:7999/ct/';
      var icons_repo_url = '';
      var theme_repo_url = '';
      manifest.name = elementName;
      manifest.main = [elementName + '.html'];

      // Add i18n dependency
      if (thereIsI18n) {
        manifest.keywords.push('i18n');
      } else {
        delete manifest.dependencies['cells-i18n-behavior'];
      }

      // Add theme dependency
      if (thereIsTheme) {
        for (var j in themeName) {
          theme_repo_url = base_repo_url + themeName[j].theme + '.git' + themeName[j].version;
          manifest.devDependencies[themeName[j].theme] = theme_repo_url;
        }
      }

      // Add icons dependency
      if (thereIsIcons) {
        for (var i in icons) {
          if(icons[i].name === 'iron-icons') {
            icons_repo_url = 'PolymerElements/' + icons[i].name + icons[i].version;
          }
          else{
            icons_repo_url = base_repo_url + icons[i].name + '.git' + icons[i].version;
          }

          manifest.devDependencies[icons[i].name] = icons_repo_url;
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
      this.copy('demo/mocks/mocks.js', 'demo/mocks/mocks.js', renamedElement);
      this.copy('test/mocks/mocks.js', 'test/mocks/mocks.js', renamedElement);
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
