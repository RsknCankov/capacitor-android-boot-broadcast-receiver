import { WebPlugin } from '@capacitor/core';

import type { CapacitorAndroidBootBroadCastReceiverPlugin } from './definitions';

export class CapacitorAndroidBootBroadCastReceiverWeb
  extends WebPlugin
  implements CapacitorAndroidBootBroadCastReceiverPlugin {}
