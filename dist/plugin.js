var capacitorCapacitorAndroidBootBroadCastReceiver = (function (exports, core) {
    'use strict';

    const CapacitorAndroidBootBroadCastReceiver = core.registerPlugin('CapacitorAndroidBootBroadCastReceiver', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorAndroidBootBroadCastReceiverWeb()),
    });

    class CapacitorAndroidBootBroadCastReceiverWeb extends core.WebPlugin {
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorAndroidBootBroadCastReceiverWeb: CapacitorAndroidBootBroadCastReceiverWeb
    });

    exports.CapacitorAndroidBootBroadCastReceiver = CapacitorAndroidBootBroadCastReceiver;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
