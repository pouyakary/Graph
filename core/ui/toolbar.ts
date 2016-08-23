
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../constants.ts" />

namespace KaryGraph.UI.Toolbar {

    //
    // ─── TOOLBAR MODE ───────────────────────────────────────────────────────────────
    //

        export enum ToolbarModeEnum {
            Move, Remove, Edit, Select
        }

        /** To get the mode of the toolbar */
        export var ToolbarMode = ToolbarModeEnum.Move;

    // ────────────────────────────────────────────────────────────────────────────────
}