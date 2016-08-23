
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.UI.AlgorithmsTab {

    //
    // ─── MAKE AN ALGORITHM CONTROL VIEW ─────────────────────────────────────────────
    //

        export function MakeAlgorithmControlView (
            algorithmObject: ScriptEngine.Algorithms.IAlgorithmObject ) {
            let view = MakeViewForAlgorithm( algorithmObject );
            document.getElementById( AlgorithmsControlContainerId ).appendChild( view );
        }

    //
    // ─── GET CONTROLLER ID ──────────────────────────────────────────────────────────
    //

        export function GetControllerId ( handle: string ) {
            return 'algorithm-box-' + handle;
        }

    //
    // ─── MAKE ALGORITHM VIEW ELEMENTS ───────────────────────────────────────────────
    //

        function MakeViewForAlgorithm (
            algorithmObject: ScriptEngine.Algorithms.IAlgorithmObject ) {

            // main box
            let controller = document.createElement('div');
            controller.className = AlgorithmsControllerClass;
            controller.id = GetControllerId( algorithmObject.manifest.handle );

                // Title
                controller.appendChild( MakeElement(
                    AlgorithmsControllerTitleClass,
                    algorithmObject.manifest.name
                ));

                // Author
                controller.appendChild( MakeElement(
                    AlgorithmsControllerAuthorClass,
                    algorithmObject.manifest.author
                ));

                // Description
                controller.appendChild( MakeElement(
                    AlgorithmsControllerDescriptionClass,
                    algorithmObject.manifest.description
                ));

                // Run Button
                controller.appendChild(
                    MakeRunButton( algorithmObject.manifest.handle )
                );

            return controller;
        }

    //
    // ─── RUN BUTTON ─────────────────────────────────────────────────────────────────
    //

        function MakeRunButton ( handle: string ) {
            let button = document.createElement('div');
            button.className = AlgorithmsControllerRunButtonClass;
            button.innerText = 'Run';

            let normalHandle = ScriptEngine.Algorithms.NormalizeHandle( handle );
            button.setAttribute('onclick',
                `KaryGraph.ScriptEngine.Algorithms.ExecuteAlgorithm("${ normalHandle }");`
            );
            return button;
        }

    //
    // ─── MAKE ELEMENT ───────────────────────────────────────────────────────────────
    //

        function MakeElement ( cls: string, text: string ) {
            let element = document.createElement('div');
            element.className = cls;
            element.innerText = text;
            return element;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}