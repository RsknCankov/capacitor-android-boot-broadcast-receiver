package com.rskn.capacitor.android.broadcast.receiver;

import android.util.Log;

public class CapacitorAndroidBootBroadCastReceiver {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
