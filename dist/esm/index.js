import { registerPlugin } from '@capacitor/core';
const CapacitorAndroidBootBroadCastReceiver = registerPlugin('CapacitorAndroidBootBroadCastReceiver', {
    web: () => import('./web').then(m => new m.CapacitorAndroidBootBroadCastReceiverWeb()),
});
export * from './definitions';
export { CapacitorAndroidBootBroadCastReceiver };
//# sourceMappingURL=index.js.map