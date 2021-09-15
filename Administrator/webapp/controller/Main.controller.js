sap.ui.define(["onem/seya/ui5layout/tnt/controller/BaseController"], function(Controller) {
    "use strict";

    return Controller.extend("onem.seya.ui5layout.tnt.controller.Main", {
        onSideNavButtonPress: function(oEvent) {
            var oToolPage = this.byId("idApp");
            var bSideExpanded = oToolPage.getSideExpanded();
            this._setToggleButtonTooltip(bSideExpanded);
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
        _setToggleButtonTooltip: function(bLarge) {

        },

        getBundleTextByModel: function(sI18nKey, oResourceModel, aPlaceholderValues) {
            return oResourceModel.getResourceBundle().getText(sI18nKey, aPlaceholderValues);

        },
        getBundleText: function(sI18nKey, aPlaceholderValues) {
            return this.getBundleTextByModel(sI18nKey, this.getModel("i18n"), aPlaceholderValues);
        },
    });
});