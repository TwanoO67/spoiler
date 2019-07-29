#!/bin/bash
rm -rf node_modules
docker-compose run --rm app npm install
docker-compose run --rm app npm rebuild node-sass --force
docker-compose run --rm app ionic cordova build android
cp ./platforms/android/app/build/outputs/apk/debug/app-debug.apk ./
