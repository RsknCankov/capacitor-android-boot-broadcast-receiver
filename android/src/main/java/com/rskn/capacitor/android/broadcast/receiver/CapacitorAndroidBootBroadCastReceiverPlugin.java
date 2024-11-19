package com.rskn.capacitor.android.broadcast.receiver;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorAndroidBootBroadCastReceiver")
public class CapacitorAndroidBootBroadCastReceiverPlugin extends Plugin {

    private CapacitorAndroidBootBroadCastReceiver implementation = new CapacitorAndroidBootBroadCastReceiver();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
