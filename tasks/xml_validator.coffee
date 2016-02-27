#
# grunt-xml-validator
# https://github.com/panzic/grunt-xml-validator
#
# Copyright (c) 2014 Carlo 'kj'
# Licensed under the MIT license.
#

module.exports = (grunt) ->

	grunt.registerMultiTask('xml_validator', 'Grunt plugin to validate XML files', () ->

		DOMParser = require('xmldom').DOMParser

		valid = 0
		fail = false

		this.filesSrc.forEach( (f) ->

			xml = grunt.file.read(f)

			doc = new DOMParser({
				locator:{},

				errorHandler: (level, msg) ->
					fail = true
					grunt.log.error f + "\tnot valid: " + msg

			}).parseFromString(xml,'text/xml')

		)

		if fail 
			grunt.fail.warn 'Some files are not valid'
		else
			grunt.log.ok this.filesSrc.length + ' files valid'
			
	)
