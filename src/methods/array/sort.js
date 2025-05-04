// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// * The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. 
// * The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const prices = [1000, 2000, 3000, 56, 9292]
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log('sortedPrices:', sortedPrices);
// Output: [ 9292, 3000, 2000, 1000, 56 ]

const days = ['Mon', 'Tue', 'Thur', 'Wed', 'Fri', 'Sun', 'Sar'];
days.sort();
console.log('days: ', days);
//Output: [ 'Fri',  'Mon', 'Sar',  'Sun', 'Thur', 'Tue', 'Wed']
