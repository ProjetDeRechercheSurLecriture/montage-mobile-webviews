# montage-mobile-webviews [![Build Status](https://secure.travis-ci.org/cesine/montage-mobile-webviews.png?branch=travis)](http://travis-ci.org/cesine/montage-mobile-webviews)

Montage test runner for Android and iOS embedded WebViews

## Documentation
See commands available in Gruntfile.js

## Examples 

```bash
$ ./scripts/set_up_new_machine.sh && grunt everything # downloads all source code, sets up test runners, runs tests (for running in Jenkins or Travis)

$ grunt test-android # copies www assets to android and runs the android tests (for developing locally)
$ grunt test-ios # copies www assets to ios and runs the ios tests (for developing locally)
$ grunt test # copies www assets to ios and android, and runs the ios and android tests (for developing locally)
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
