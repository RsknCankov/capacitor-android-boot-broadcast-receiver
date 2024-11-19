import { CapacitorAndroidBootBroadCastReceiver } from 'capacitor-android-boot-broadcast-receiver';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorAndroidBootBroadCastReceiver.echo({ value: inputValue })
}
