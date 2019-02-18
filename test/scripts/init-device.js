import { initSeedAllDevice } from 'trezor-bridge-communicator';

require('@babel/polyfill');

(async () => {
    await initSeedAllDevice();
})();