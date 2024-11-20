'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
