'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    tests: {
      files: ['test/**/*_test.js'],
    },
    exec: {
      echo_help: {
        cmd: function() {
          return 'echo "You can use this project to download Montage demos, and build them into Phonegap (Cordova) wrapped packaged apps to explore MontageJS as a HTML5 UI for native apps (delivered via the Android Google Play store, and/or the Apple Store)\n\n  See Gruntfile.js for what you can do with this project"';
        }
      },
      download_demos: {
        cmd: function() {
          return 'npm install && cd node_modules/montage && npm install';
        }
      },
      android: {
        cmd: function() {
          return 'cordova run android';
        }
      },
      ios: {
        cmd: function() {
          return 'cordova build ios && ./platforms/ios/cordova/run ';
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
    copy: {
      demos: {
        files: [
          {
            expand: true,
            src: ['node_modules/montage/**'],
            dest: 'www/'
          }, // includes files in src and its subdirs
          {
            expand: true,
            src: ['node_modules/popcorn/**'],
            dest: 'www/'
          }, // includes files in src and its subdirs
          {
            expand: true,
            src: ['node_modules/paparazzi/**'],
            dest: 'www/'
          }, // includes files in src and its subdirs
          {
            expand: true,
            src: ['node_modules/calculator/**'],
            dest: 'www/'
          }, // includes files in src and its subdirs
          {
            expand: true,
            src: ['node_modules/photofx/**'],
            dest: 'www/'
          }, // includes files in src and its subdirs
          {
            expand: true,
            src: ['node_modules/card/**'],
            dest: 'www/'
          }, // includes files in src and its subdirs
          {
            expand: true,
            src: ['node_modules/storyboard/**'],
            dest: 'www/'
          }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['jshint', 'exec:echo_help']);
  grunt.registerTask('download', ['jshint', 'exec:download']);
  grunt.registerTask('build', ['jshint', 'exec:build']);
  grunt.registerTask('android', ['jshint', 'exec:android']);
  grunt.registerTask('ios', ['jshint', 'exec:ios']);
  grunt.registerTask('update', ['jshint', 'exec:download_demos', 'copy:demos']);

};