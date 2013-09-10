'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    tests: {
      files: ['test/**/*_test.js'],
    },
    exec: {
      echo_name: {
        cmd: function(firstName, lastName) {
          var formattedName = [
            lastName.toUpperCase(),
            firstName.toUpperCase()
          ].join(', ');

          return 'echo ' + formattedName;
        }
      },
      download: {
        cmd: function() {
          return 'echo "run download script"';
        }
      },
      build: {
        cmd: function() {
          return 'echo "run build (move js into assets folder) script" ';
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'exec:echo_name:jenkins:travis']);
  grunt.registerTask('download', ['jshint', 'exec:download']);
  grunt.registerTask('build', ['jshint', 'exec:build']);

};