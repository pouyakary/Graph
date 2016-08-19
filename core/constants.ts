
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
        export const GraphColor = '#171717';

        /** Color of the selected parts of the graph */
        export const GraphSelectColor = '#A200FF';

    //
    // ─── CIRCLE ─────────────────────────────────────────────────────────────────────
    //

        /** Radius of the node circles */
        export const CircleRadius = 7;

        /** Radius of the node circles when dragging */
        export const CircleRadiusAtDrag = 6;

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

        /** Width of the vertices */
        export const LineWidth = 2;

    //
    // ─── LOOPARROW ──────────────────────────────────────────────────────────────────
    //

        export const LoopArrowDisplacementX = -5;

        export const LoopArrowDisplacementY = -5;

        export const LoopArrowRadius = 10;

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

        /** Opacity of the *SelectBox* so that the select nodes can be seen */
        export const SelectBoxOpacity = 0.5;

    //
    // ─── CONSOLE ────────────────────────────────────────────────────────────────────
    //

        /** Id of the main div containing the console. */
        export const ConsoleId = "console";

    //
    // ─── PROGRAMMER ─────────────────────────────────────────────────────────────────
    //

        /** Id of the main div containing the notebook. */
        export const NotebookId = "ProgrammerNotebook";

        export const NotebookPromptClass = "notebook-prompt";

        export const NotebookPromptInputClass = "notebook-prompt-input";

        export const NotebookError = "notebook-error";

        export const NotebookResultRowClass = 'notebook-row';

        export const NotebookResultCodeClass = 'notebook-row-code';

        export const NotebookResultSayBaseCase = 'notebook-row-say-base';

        export const NotebookSayBoxClass = 'notebook-say-row';

    //
    // ─── SAY IMPLEMENTATIONS ────────────────────────────────────────────────────────
    //

        export const SayStringClass = 'say-string';

    //
    // ─── TABS ───────────────────────────────────────────────────────────────────────
    //

        export const TabsContainer = 'header-tabs';

        export const EditorTabContainerClass = 'editor-tab';

        export const EditorTabColor = '#799DC4';

        export const ProgrammerTabColor = '#B486A8';

    //
    // ─── TAB VIEWS ──────────────────────────────────────────────────────────────────
    //

        export const ProgrammerTabId = 'ProgrammerView';

        export const EditorTabId = 'EditorView';

    //
    // ─── MONACO ─────────────────────────────────────────────────────────────────────
    //

        export const MonacoPlaceholderDiv = 'monaco-placeholder';

    //
    // ─── RIBBONS ────────────────────────────────────────────────────────────────────
    //

        export const EditorRibbonIconsId = 'ribbon-editor';

        export const ProgrammerRibbonIconsId = 'ribbon-programmer';

    // ────────────────────────────────────────────────────────────────────────────────

}