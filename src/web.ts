import { WebPlugin } from '@capacitor/core';

import type { CapacitorAndroidBootBroadCastReceiverPlugin } from './definitions';

export class CapacitorAndroidBootBroadCastReceiverWeb
  extends WebPlugin
  implements CapacitorAndroidBootBroadCastReceiverPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
