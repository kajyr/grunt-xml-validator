(function() {
  module.exports = function(grunt) {
    return grunt.registerMultiTask('xml_validator', 'Grunt plugin to validate XML files', function() {
      var DOMParser, fail, valid;
      DOMParser = require('xmldom').DOMParser;
      valid = 0;
      fail = false;
      this.filesSrc.forEach(function(f) {
        var doc, xml;
        xml = grunt.file.read(f);
        return doc = new DOMParser({
          locator: {},
          errorHandler: function(level, msg) {
            fail = true;
            return grunt.log.error(f + "\tnot valid: " + msg);
          }
        }).parseFromString(xml, 'text/xml');
      });
      if (fail) {
        return grunt.fail.warn('Some files are not valid');
      } else {
        return grunt.log.ok(this.filesSrc.length + ' files valid');
      }
    });
  };

}).call(this);
