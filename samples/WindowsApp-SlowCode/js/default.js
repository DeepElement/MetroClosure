(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().then(function () {
                return onStart();
            }));
        }
    };
    app.start();
})();


var onStart = function () {
    // Dispatch 
    setTimeout(function () {
        var outputContainer = window.document.getElementById('Main');

        // Start timer
        var start = new Date();

        // Do some work that is not optimized
        var dict = {};
        for (var i = 0; i <= 5000; i++)
            for (var m = 0; m <= 300; m++) {
                dict[i.toString() + "-" + m.toString()] = i + m;
            }
        var total = 0;
        for (var key in dict) {
            total += dict[key];
        }

        // Stop timer
        var end = new Date();

        // Output results to screen
        outputContainer.innerText = end.getTime() - start.getTime() + "ms";
    }, 0);
}