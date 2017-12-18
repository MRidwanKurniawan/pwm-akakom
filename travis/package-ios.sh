#!/bin/bash -v

set -e

if [[ "$TRAVIS_BRANCH" == "master" ]]
then
    echo "Skipping package iOS for master branch"
    exit
fi

mkdir -p output
tar zcvf output/ionictravis-release-unsigned.app.tgz platforms/ios/build/emulator/IonicTravis.app

