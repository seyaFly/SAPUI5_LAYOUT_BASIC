sap.ui.define(['sap/uxap/BlockBase'], function(BlockBase) {
    "use strict";

    var PersonalBlockPart2 = BlockBase.extend("onem.seya.ui5layout.object.view.blocks.personal.PersonalBlockPart2", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "onem.seya.ui5layout.object.view.blocks.personal.PersonalBlockPart2",
                    type: "XML"
                },
                Expanded: {
                    viewName: "onem.seya.ui5layout.object.view.blocks.personal.PersonalBlockPart2",
                    type: "XML"
                }
            }
        }
    });

    return PersonalBlockPart2;
});