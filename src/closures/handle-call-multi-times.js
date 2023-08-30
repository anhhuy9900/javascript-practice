let view;
function initialize() {
  console.log('------- initialize ----------')
  let called = 0;
  return function() {
    console.log('------- initialize - return function ----------')
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called = true;
      console.log('view has been set!')
    }

  }
}

const start = initialize();
start();
start();
start();
console.log(view);

// *Output:
// ------- initialize ----------
// ------- initialize - return function ----------
// view has been set!
// ------- initialize - return function ----------
// ------- initialize - return function ----------