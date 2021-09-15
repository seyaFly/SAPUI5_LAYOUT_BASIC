/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["onem/seya/ui5layout/dynamicPage/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
