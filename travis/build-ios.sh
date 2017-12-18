#!/bin/bash -v

set -e

# Build Ionic App for iOS
cordova platform add ios --nofetch

if [[ "$TRAVIS_BRANCH" == "master" ]]
then
    ionic cordova build ios
else
    ionic cordova build ios --prod --release
fi
