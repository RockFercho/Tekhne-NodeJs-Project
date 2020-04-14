'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['src/**/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('build', ['eslint']);
};
