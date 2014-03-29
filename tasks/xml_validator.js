/*
 * grunt-xml-validator
 * https://github.com/panzic/grunt-xml-validator
 *
 * Copyright (c) 2014 Carlo 'kj'
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('xml_validator', 'Grunt plugin to validate XML files', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var libxmljs = require("libxmljs");

		var valid = 0;
		var fail = false;

		this.filesSrc.forEach(function(f) {

			var xml = grunt.file.read(f);

			try {
				var xmlDoc = libxmljs.parseXml(xml);
				valid++;
				grunt.verbose.ok(f, 'valid');
			} catch(e) {
				grunt.log.error(f + ' not valid');
				fail = true;
			}
		});

		if (fail) {
			grunt.fail.warn('Some fail are not valid');
		} else {
			grunt.log.ok( valid, ' files valid');
		}
			
	});

};
