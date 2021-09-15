sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'],
    function(coreLibrary, BlockBase) {
        "use strict";

        var ViewType = coreLibrary.mvc.ViewType;

        var GoalsBlock = BlockBase.extend("onem.seya.ui5layout.object.view.blocks.goals.GoalBlock", {
            metadata: {
                views: {
                    Collapsed: {
                        viewName: "onem.seya.ui5layout.object.view.blocks.goals.GoalBlock",
                        type: ViewType.XML
                    },
                    Expanded: {
                        viewName: "onem.seya.ui5layout.object.view.blocks.goals.GoalBlock",
                        type: ViewType.XML
                    }
                }
            }
        });
        return GoalsBlock;
    });