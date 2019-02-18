#!/bin/bash

# go to root
cd "$(dirname "$0")"
cd ..

echo 'params'
echo "$@"

# run bridge
cd /trezor-bridge && ./extracted/usr/bin/trezord -ed 21324:21325 -u=false &

# run emulator
cd /trezor-emulator/trezor-core && PYOPT=0 ./emu.sh &

# run wallet
cd /trezor-wallet && yarn run server:stable &

# init device
npx babel-node /trezor-wallet/test/scripts/init-device.js &

# run tests
DEV_USER=test DEV_PASSWORD=pass yarn run test-integration:gitlab -c baseUrl="https://localhost:8080/#/"
