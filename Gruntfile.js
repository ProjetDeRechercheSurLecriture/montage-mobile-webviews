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
      update_assets_from_www: {
        cmd: function() {
          return './scripts/copy_assets_from_www_to_platforms.sh';
        }
      },
      build_demos_for_production: {
        cmd: function() {
          // return 'cd node_modules/popcorn && mop && cd ../../node_modules/paparazzi && mop && cd ../../node_modules/calculator && mop && cd ../../node_modules/photofx && mop && cd ../../node_modules/card && mop && cd ../../node_modules/storyboard && mop ';
          return 'cd node_modules/popcorn && mop ';
        }
      },
      android: {
        cmd: function() {
          return 'cordova run android';
        }
      },
      android_build: {
        cmd: function() {
          return 'cd platforms/android && ant clean debug install';
        }
      },
      android_test: {
        cmd: function() {
          return 'android update project -p ./platforms/android && cd platforms/android && ant clean debug install';
        }
      },
      android_test_webview: {
        cmd: function() {
          return 'wget https://selenium.googlecode.com/files/android-server-2.32.0.apk && adb install android-server-2.32.0.apk && adb  shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity -e debug true && adb  forward tcp:8080 tcp:8080';
        }
      },
      ios: {
        cmd: function() {
          return 'cordova build ios && ./platforms/ios/cordova/run ';
        }
      },
      ios_test: {
        cmd: function() {
          return 'echo "There are no tests set up for the iOS platform" ';
        }
      },
      /* https://code.google.com/p/selenium/wiki/AndroidDriver */
      selenium_test: {
        cmd: function() {
          return 'echo "TODO now we can run javascript tests in the Android WebView by contacting http://localhost:8080/wd/hub" ';
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
            src: ['node_modules/popcorn/builds/popcorn/**'],
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

  // Just download fresh demos, but dont overwrite contents of www/
  grunt.registerTask('download', ['jshint', 'exec:download_demos']);

  // Warning calling update will download all the latest demos and build them into the app, replacing any previous demos
  grunt.registerTask('update', ['jshint', 'exec:download_demos', 'exec:build_demos_for_production', 'exec:update_assets_from_www', 'copy:demos']);

  // Build and debug/test on devices
  grunt.registerTask('android', ['jshint', 'exec:android']);
  grunt.registerTask('ios', ['jshint', 'exec:ios']);

  // Run tests on emulators/devices using travis/jenkins
  grunt.registerTask('test-android', ['jshint', 'exec:android_test']);
  grunt.registerTask('test-ios', ['jshint', 'exec:ios_test']);
  grunt.registerTask('test', ['exec:android_test', 'exec:ios_test']);

  // Run everything to set up a new machine or continuous integration tests for travis/jenkins
  grunt.registerTask('everything', [ 'exec:update_assets_from_www', 'exec:android_build', 'exec:android_test_webview', 'selenium_test']);
  // grunt.registerTask('ci-test', ['update', 'exec:android_build', 'test']);
};