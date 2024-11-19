import { registerPlugin } from '@capacitor/core';

import type { CapacitorAndroidBootBroadCastReceiverPlugin } from './definitions';

const CapacitorAndroidBootBroadCastReceiver =
  registerPlugin<CapacitorAndroidBootBroadCastReceiverPlugin>(
    'CapacitorAndroidBootBroadCastReceiver',
    {
      web: () =>
        import('./web').then(
          m => new m.CapacitorAndroidBootBroadCastReceiverWeb(),
        ),
    },
  );

export * from './definitions';
export { CapacitorAndroidBootBroadCastReceiver };
