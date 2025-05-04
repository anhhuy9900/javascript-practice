## Callback
In JavaScript, whether a callback is part of an async process depends on the context in which the callback is used. Callbacks themselves are simply functions, and their execution can be synchronous or asynchronous based on how they are invoked.

### How to Determine If a Callback Is Asynchronous
Synchronous Callbacks:
- Executed immediately within the current execution stack.
Example: Array methods, direct function calls.
Asynchronous Callbacks:

Executed later, often as part of the event loop.
- Example: setTimeout, Promises, I/O operations, and event listeners.
