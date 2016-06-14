
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

    //
    // ─── CIRCLE ─────────────────────────────────────────────────────────────────────
    //

        /** Radius of the node circles */
        export const CircleRadius = 17;

        /** Radius of the node circles when draggings */
        export const CircleRadiusAtDrag = 14;

        /** Time of changing the size of node circle from normal to drag mode */
        export const CircleAnimationDurationAtStart = 40;

        /** Time of changing the size of node circle from drag to normal mode */
        export const CircleAnimationDurationAtStop  = 100;

	//
	// ─── LINE ───────────────────────────────────────────────────────────────────────
	//

        /** Wdith of the vertices */
        export const LineWidth = 4;

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

    // ────────────────────────────────────────────────────────────────────────────────

}