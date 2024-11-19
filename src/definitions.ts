export interface CapacitorAndroidBootBroadCastReceiverPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
