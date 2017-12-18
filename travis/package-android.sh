#!/bin/bash -v

set -e

if [[ "$TRAVIS_BRANCH" == "master" ]]
then
    echo "Skipping package Android for master branch"
    exit
fi

mkdir -p output
cp platforms/android/build/outputs/apk/android-release-unsigned.apk output/ionictravis-release-unsigned.apk

