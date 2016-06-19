
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

        /** Current prompt */
        var prompt: HTMLDivElement;

        /** Input of the prompt */
        var promptInput: HTMLInputElement;

    //
	// ─── INIT NOTEBOOK ──────────────────────────────────────────────────────────────
	//

        /** Starts the notebook view at start. */
        export function INIT ( ) {
            notebook = <HTMLDivElement> document.getElementById( NotebookId );
            ClearScreen( );
            StartPrompt( );
        }

    //
	// ─── CLEAR SCREEN ───────────────────────────────────────────────────────────────
	//

        /** Cleans the screen of the notebook and restarts the code of the notebook*/
        function ClearScreen () {
            notebook.innerHTML = '';
        }

    //
	// ─── START PROMPT ───────────────────────────────────────────────────────────────
	//

        /** Initilizes a prompt into the notebook */
        function StartPrompt( ) {
            CreateThePrompt( );
            notebook.appendChild( prompt );
        }

    //
	// ─── CREATE PROMPT ──────────────────────────────────────────────────────────────
	//

        /** Creates the coresponding object that presents the prompt. */
        function CreateThePrompt ( ) {
            // Prompt Object
            prompt = document.createElement( 'div' );
            prompt.className = NotebookPromptClass;
            // Prompt Input Object
            promptInput = document.createElement( 'input' );
            promptInput.className = NotebookPromptInputClass;
            // Prompt 
            prompt.appendChild( promptInput );
        }

    //
	// ─── GENERATE ROW ───────────────────────────────────────────────────────────────
	//

        function GenerateRowHTML ( ) {

            
        }

    // ────────────────────────────────────────────────────────────────────────────────
    
}