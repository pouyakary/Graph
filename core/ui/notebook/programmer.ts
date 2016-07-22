
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/** This module is responsible for the */
module KaryGraph.UI.Programmer {

    //
    // ─── DEFS ───────────────────────────────────────────────────────────────────────
    //

        /** The main notebook view */
        var notebook: HTMLDivElement;

        /** Current prompt */
        var prompt: HTMLDivElement;

        /** Input of the prompt */
        var promptInput: HTMLInputElement;

        /** Commands History Array */
        var promptHistory:Array<string>;

        /** Commands History Cursor */
        var promptHistoryCursor:number;

    //
    // ─── WRAPPERS ───────────────────────────────────────────────────────────────────
    //

        declare function PrismHighlight ( code: string ) : string;

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
    // ─── RESTART SCREEN ─────────────────────────────────────────────────────────────
    //

        export function ClearNotebookScreen ( ) {
            ClearScreen( );
            StartPrompt( );
        }

    //
    // ─── CLEAR SCREEN ───────────────────────────────────────────────────────────────
    //

        /** Cleans the screen of the notebook and restarts the code of the notebook*/
        function ClearScreen ( ) {
            notebook.innerHTML = '';
        }

    //
    // ─── START PROMPT ───────────────────────────────────────────────────────────────
    //

        /** Initializes a prompt into the notebook */
        function StartPrompt ( ) {
            CreateThePrompt( );
            notebook.appendChild( prompt );
            promptHistory = new Array<string>( );
            promptHistoryCursor = -1;
        }

    //
    // ─── CREATE PROMPT ──────────────────────────────────────────────────────────────
    //

        /** Creates the corresponding object that presents the prompt. */
        function CreateThePrompt ( ) {
            // Prompt Object
            prompt = document.createElement( 'div' );
            prompt.className = NotebookPromptClass;
            // Prompt Input Object
            promptInput = document.createElement( 'input' );
            promptInput.className = NotebookPromptInputClass;
            /** We have two different methods on purpose, do not try to merge them! */
            promptInput.addEventListener( 'keypress' , OnPromptEnterClicked );
            promptInput.addEventListener( 'keydown' , OnPromptArrowsClicked );
            // Prompt 
            prompt.appendChild( promptInput );
        }
    
    //
    // ─── ON PROMPT ENTER ────────────────────────────────────────────────────────────
    //

        /** Starts when the enter key is pressed on the input  */
        function OnPromptEnterClicked ( ev: KeyboardEvent ) {
            // if ( !ev.metaKey ) return;
            let key = ev.which || ev.keyCode;
            if ( key === 13 ) {
                /** Enter/Return Key */
                let code = FetchAndResetInput( );
                promptHistory.push(code);
                promptHistoryCursor++;
                let result = RunAndGenerateResults( code );
                let html = GenerateResultRowHTML( code , result );
                AppendRow( html );
            }
        }

    //
    // ─── ON PROMPT ARROWS ───────────────────────────────────────────────────────────
    //


        /** Starts when the arrow keys is pressed on the input  */
        function OnPromptArrowsClicked ( ev: KeyboardEvent ) {
            // if ( !ev.metaKey ) return;
            let key = ev.which || ev.keyCode;
            if ( key === 38 ) {
                /** Up Arrow Key */
                if ( promptHistoryCursor > -1 ) {
                    ResetAndSetInput( promptHistory[ promptHistoryCursor ] );
                    promptHistoryCursor--;
                }
            } else if ( key === 40 ) {
                /** Down Arrow Key */
                if ( promptHistoryCursor + 2 < promptHistory.length ) {
                    ResetAndSetInput( promptHistory[ promptHistoryCursor + 2 ] );
                    promptHistoryCursor++;
                } else {
                    promptHistoryCursor = promptHistory.length-1;
                    ResetAndSetInput('');
                }
            }
        }

    //
    // ─── APPEND ROW ─────────────────────────────────────────────────────────────────
    //

        function AppendRow ( html: string ) {
            let row = document.createElement('div');
            row.className = NotebookResultRowClass;
            row.innerHTML = html;
            notebook.insertBefore( row , prompt );
        }

    //
    // ─── RESET AND SET INPUT VALUSE ─────────────────────────────────────────────────
    //

        /** Resets and sets the input box value */
        function ResetAndSetInput ( inputValue: string ) {
            promptInput.value = inputValue;
        }

    //
    // ─── FETCH AND RESET INPUT VALUE ────────────────────────────────────────────────
    //
        
        /** Fetches and resets the input box value */
        function FetchAndResetInput ( ): string {
            let result = promptInput.value;
            promptInput.value = '';
            return result;
        }

    //
    // ─── GENERATE ROW ───────────────────────────────────────────────────────────────
    //

        function GenerateResultRowHTML ( code: string, result: string ): string {
            let highlightedCode = PrismHighlight( code );
            return `<div class="${ NotebookResultCodeClass }">${ highlightedCode }` +
                   `<div class="${ NotebookSayBoxClass }">${ result }</div></div>`;
        }

    //
    // ─── RUN AND GENERATE RESULTS ───────────────────────────────────────────────────
    //

        function RunAndGenerateResults ( code: string ) {
            let runResults = KaryGraph.ScriptEngine.Run( code );
            if ( ScriptEngine.RunStatus ) {
                return KaryGraph.UI.Programmer.GenerateSayHTML( runResults );
            } else {
                return `<div class="${ NotebookError }">${ runResults }</div>`
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}