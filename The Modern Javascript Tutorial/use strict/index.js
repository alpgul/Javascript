alert("some code");
// "use strict" below is ignored, must be on the top

"use strict";

// strict mode is not activated

"use strict";
x = 3.14;       // This will cause an error because x is not declared

"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}

function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
//There’s no way to cancel use strict