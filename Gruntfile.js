/*
 * grunt-xml-validator
 * https://github.com/panzic/grunt-xml-validator
 *
 * Copyright (c) 2014 Carlo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
 
    // Configuration to be run (and then tested).
    xml_validator: {
      valid: {
			src: [	'test/fixtures/example_ok.xml' ]
      },
      invalid: {
			src: [ 'test/fixtures/example_fail.xml' ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/test_*.js'],
    },

    coffee: {
			compile: {
				files: {
					'tasks/xml_validator.js': ['tasks/xml_validator.coffee']
				}
			  },
		},
		watch: {
			scripts: {
				files: ['tasks/*.coffee'],
				tasks: ['coffee'],
				options: {
					spawn: false,
				},
			},
		}

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['coffee', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['coffee', 'test']);

};
