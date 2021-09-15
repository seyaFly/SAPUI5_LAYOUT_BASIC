sap.ui.define(["onem/seya/ui5layout/dynamicPage/controller/BaseController"], function(Controller) {
    "use strict";

    return Controller.extend("onem.seya.ui5layout.dynamicPage.controller.MainView", {
        /**
         * @override
         */
        onInit: function() {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oRouter.attachRouteMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function() {

        },
        onRouteMatched: function(oEvent) {
            var sRouteName = oEvent.getParameter("name"),
                oArguments = oEvent.getParameter("arguments");

            // Save the current route name
            this.currentRouteName = sRouteName;
            this.currentProduct = oArguments.product;
        },

        onStateChanged: function(oEvent) {
            var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
                sLayout = oEvent.getParameter("layout");

            // Replace the URL with the new layout if a navigation arrow was used
            if (bIsNavigationArrow) {
                this.oRouter.navTo(this.currentRouteName, { layout: sLayout, product: this.currentProduct }, true);
            }
        },

        onExit: function() {
            this.oRouter.detachRouteMatched(this.onRouteMatched, this);
        }
    });
});