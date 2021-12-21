#!/bin/sh
 
BALENA_ARCH="$1"
SPOTIFYD_VERSION="$2"

echo "Downloading spotifyd binary v${SPOTIFYD_VERSION} for arch ${BALENA_ARCH}..."
case "$BALENA_ARCH" in
   "rpi") 
      SPOTIFYD_ARCH="-armv6"
      ;;
   "aarch64")
      SPOTIFYD_ARCH="-armhf"
      ;;
   "amd64")
      SPOTIFYD_ARCH=""
      ;;
   "armv7hf")
      SPOTIFYD_ARCH="-armhf"
      ;;
   "i386")
      SPOTIFYD_ARCH=""
      ;;
   *) echo >&2 "error: unsupported architecture ($1)"; exit 1 ;;
esac
 
URL="https://github.com/Spotifyd/spotifyd/releases/download/v${SPOTIFYD_VERSION}/spotifyd-linux${SPOTIFYD_ARCH}-slim.tar.gz"
wget $URL -O /usr/src/spotifyd.tar.gz