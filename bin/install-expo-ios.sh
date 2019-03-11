#!/bin/bash

set -e

VERSION=2.10.0

pushd /tmp

rm -rf Exponent-$VERSION.app

wget https://dpq5q02fu5f55.cloudfront.net/Exponent-$VERSION.tar.gz

mkdir Exponent-$VERSION.app && tar xvf Exponent-$VERSION.tar.gz -C Exponent-$VERSION.app

open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/

until xcrun simctl list | grep active; do
  echo "Waiting for the ios simulator"
  sleep 1
done

xcrun simctl install booted Exponent-$VERSION.app