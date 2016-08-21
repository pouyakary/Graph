
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI {

    //
    // ─── LOAD IMAGES ────────────────────────────────────────────────────────────────
    //

        /** Loads some of the necessary images to remove image loading lags. */
        export function LoadImagesAtStart ( ) {
            const listOfImages = [
                GetPath('toolbar-tabs-algorithms.png'),
                GetPath('toolbar-tabs-programmer.png'),
            ];
            listOfImages.forEach( imageResource => {
                let tempImage = new Image( );
                tempImage.src = imageResource;
            })
        }

    // ────────────────────────────────────────────────────────────────────────────────

}