
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// To reduce TypeScript's decleration complexities, these wrappers introduce 
// simpler ways to model their functionings. 
//

//
// ─── PRISM HIGHLIGHTING WRAPPER ─────────────────────────────────────────────────
//

    function PrismHighlight( code ) {
        return Prism.highlight( code, Prism.languages.javascript );
    }

// ────────────────────────────────────────────────────────────────────────────────