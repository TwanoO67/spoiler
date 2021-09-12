#!/bin/bash
rm -rf node_modules
docker-compose run app npm install
docker-compose run app npm rebuild node-sass --force
docker-compose run app ionic cordova build android
cp ./platforms/android/app/build/outputs/apk/debug/app-debug.apk ../
