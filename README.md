# grunt-xml-validator

> Grunt plugin to validate XML files

[![Build Status](https://travis-ci.org/kajyr/grunt-xml-validator.svg)](https://travis-ci.org/kajyr/grunt-xml-validator)

## Getting Started
This plugin requires Grunt `>=0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xml-validator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xml-validator');
```

## The "xml_validator" task

### Overview
In your project's Gruntfile, add a section named `xml_validator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xml_validator: {
    your_target: {
      src: [ 'your_files/*.xml', 'another_file.xml' ]
    },
  },
});
```

## Release History

1.1.1 - Shows failing files or count of valid files

1.1.0 - Removed libxmljs due to incompatibility with Windows. Moved to xmldom.

1.0.0 - let's give it a try :)
