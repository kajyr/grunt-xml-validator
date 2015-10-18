'use strict';

var grunt = require('grunt');
var exec = require('child_process').exec;

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.xml_validator = {
	valid: function(test) {

	test.expect(1);

	exec('grunt xml_validator:valid', function(error, stdout) { 
		var success = error === null;
		test.ok(success, 'Valid xml files are considered valid');
		test.done();
	});

	},
	invalid: function(test) {

		test.expect(1);

		exec('grunt xml_validator:invalid', function(error, stdout) { 
			var success = error !== null;
			test.ok(success, 'Invalid xml files are not considered invalid');
			test.done();

		});

	}
};
