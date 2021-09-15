sap.ui.define(['sap/uxap/BlockBase'], function(BlockBase) {
    "use strict";

    var PersonalBlockPart1 = BlockBase.extend("onem.seya.ui5layout.object.view.blocks.personal.PersonalBlockPart1", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "onem.seya.ui5layout.object.view.blocks.personal.PersonalBlockPart1",
                    type: "XML"
                },
                Expanded: {
                    viewName: "onem.seya.ui5layout.object.view.blocks.personal.PersonalBlockPart1",
                    type: "XML"
                }
            }
        }
    });

    return PersonalBlockPart1;
});