// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
                return onStart();
            }));
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();


var onStart = function () {
    var yo = window.document.getElementById('Main');
    var start = new Date();

    var dict = {};
    for(var i=0; i<=5000; i++)
        for (var m = 0; m <= 100; m++) {
            dict[i.toString() + "-" + m.toString()] = i + m;
        }
    var total = 0;
    for (var key in dict) {
        total += dict[key];
    }

    var end = new Date();
    yo.innerText = end.getTime() - start.getTime();
}