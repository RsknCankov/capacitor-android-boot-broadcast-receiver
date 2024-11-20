import { PluginListenerHandle } from '@capacitor/core';

export interface CapacitorAndroidBootBroadCastReceiverPlugin {
  addListener(
    eventName: 'ActionReceived',
    listenerFunc: (event: any) => void,
  ): Promise<PluginListenerHandle>;
}
