# capacitor-android-boot-broadcast-receiver

Capacitor Android plugin which notifies when android boot actions (android.intent.action.BOOT_COMPLETED,android.intent.action.QUICKBOOT_POWERON,android.intent.action.LOCKED_BOOT_COMPLETED,android.intent.action.SCREEN_OFF,android.intent.action.SCREEN_ON)) are fired

## Install

```bash
npm install capacitor-android-boot-broadcast-receiver
npx cap sync
```

## API

<docgen-index>

* [`addListener('ActionReceived', ...)`](#addlisteneractionreceived-)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('ActionReceived', ...)

```typescript
addListener(eventName: 'ActionReceived', listenerFunc: (event: any) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>'ActionReceived'</code>        |
| **`listenerFunc`** | <code>(event: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
