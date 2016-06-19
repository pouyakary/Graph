
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * This module is responsible for the 
 */
module KaryGraph.UI.Programmer {

    //
	// ─── NOTE ───────────────────────────────────────────────────────────────────────
	//

        //
        // Notebook works as an interacive console. You have a prompt, when you hit 
        // enter it adds a DIV. The structure of the view is somehow like this:
        //
        // <div id="ProgrammerNotebook">
        //    <div class="NotebookRow">
        //       <pre class="Command"> ... </pre>
        //       <div class="Result"> ... </div>
        //    </div>
        //    ...
        //    <div class="Prompt">
        //       <div class="PromptSign"> ... </div>
        //       <input class="PromptInput"> ... </div>
        //    <div>
        // </div>
        //

    //
	// ─── DEFS ───────────────────────────────────────────────────────────────────────
	//

        /** The main notebook view */
        var notebook: HTMLDivElement;

        /** Current input box id */

    //
	// ─── INIT NOTEBOOK ──────────────────────────────────────────────────────────────
	//

        /** Starts the notebook view at start. */
        export function INIT ( ) {
            notebook = <HTMLDivElement> document.getElementById( NotebookId );
        }

    // ────────────────────────────────────────────────────────────────────────────────
    
}