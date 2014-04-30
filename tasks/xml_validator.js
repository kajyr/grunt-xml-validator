/*
 * grunt-xml-validator
 * https://github.com/panzic/grunt-xml-validator
 *
 * Copyright (c) 2014 Carlo 'kj'
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('xml_validator', 'Grunt plugin to validate XML files', function() {

		var DOMParser = require('xmldom').DOMParser;

		var valid = 0;
		var fail = false;

		this.filesSrc.forEach(function(f) {

			var xml = grunt.file.read(f);
			var doc = new DOMParser({
				locator:{},
				errorHandler: function(level, msg) {
					fail = true;
					grunt.log.error(f + "\tnot valid");
				}
			}).parseFromString(xml,'text/xml');


		});

		if (fail) {
			grunt.fail.warn('Some files are not valid');
		} else {
			grunt.log.ok(this.filesSrc.length + ' files valid');
		}
			
	});

};
