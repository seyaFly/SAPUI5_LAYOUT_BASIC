sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("onem.seya.ui5layout.dynamicPage.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "onem.seya.ui5layout.dynamicPage",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
