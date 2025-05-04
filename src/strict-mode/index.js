// "use strict";
var a = 'global'
// if we open use strict mode the delete function will notice an error
// 'delete' cannot be called on an identifier in strict mode.
delete a;
console.log(a)
