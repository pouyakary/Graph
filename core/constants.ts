
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── GRAPH VIEW ─────────────────────────────────────────────────────────────────
    //

        /** Id of main Snap Paper for the Graph */
        export const GraphViewId = 'GraphView';

    //
	// ─── GRAPH ──────────────────────────────────────────────────────────────────────
	//
         
        /** Color of the graph */
        export const GraphColor = 'black';

        /** Color of the selected parts of the graph */
        export const GraphSelectColor = '#A200FF';

    //
    // ─── CIRCLE ─────────────────────────────────────────────────────────────────────
    //

        /** Radius of the node circles */
        export const CircleRadius = 10;

        /** Radius of the node circles when draggings */
        export const CircleRadiusAtDrag = 7;

        /** Font size of the don't *number* label */
        export const DotNumberLabelFontSize = 10;

        /** X displacement of *number* label */
        export const DotNumberLabelDisplacementX = 3;

        /** Y displacement of *number* label */
        export const DotNumberLabelDisplacementY = 16;

        /** Time of changing the size of node circle from normal to drag mode */
        export const CircleAnimationDurationAtStart = 40;

        /** Time of changing the size of node circle from drag to normal mode */
        export const CircleAnimationDurationAtStop  = 100;

	//
	// ─── LINE ───────────────────────────────────────────────────────────────────────
	//

        /** Wdith of the vertices */
        export const LineWidth = 2;

    //
    // ─── STATUS BAR ─────────────────────────────────────────────────────────────────
    //

        /** Id of the status bar */
        export const StatusbarId = 'status-view';

    //
    // ─── TOOLBAR ────────────────────────────────────────────────────────────────────
    //

        /** Id of the move icon */
        export const ToolbarIconMove = 'icon-move';
        
        /** Id of the remove icon */
        export const ToolbarIconRemove = 'icon-remove';

        /** Id of the edit icon */
        export const ToolbarIconEdit = 'icon-edit';

        /** Id of the select icon */
        export const ToolbarIconSelect = 'icon-select';

        /** 
         * Applying this class to an icon will make the icon will make the
         * icon look big to indicate it's active state. Use the function:
         * `KaryGraph.UI.Toolbar.ChangeIconToActiveMode( iconId: string )`
         * for making the icon you want active
         */
        export const ToolbarActiveIconClass = 'icon-active';

    //
	// ─── SELECTIONBOX ───────────────────────────────────────────────────────────────
	//

        /** Background color of the select box */
        export const SelectBoxColor = "#E2AEFF";

        /** Opactiy of the *SelectBox* so that the select nodes can be seen */
        export const SelectBoxOpacity = 0.5;

    //
	// ─── CONSOLE ────────────────────────────────────────────────────────────────────
	//

        export const ConsoleId = "console";

    // ────────────────────────────────────────────────────────────────────────────────

}