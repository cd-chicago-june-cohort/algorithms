/**
 * Shift all values of array left by one (deleting first value)
 * Set end value to 0
 * @param {Array} items 
 * @return {Array}
 */
function shiftArrayValues (items)
{
  // Shift all left one (stop before the last one)
  for (var i = 0; i < items.length-1; i++) {
    items[i] = items[i+1];
  }

  // Set last index to 0
  var lastIndex = items.length - 1;
  items[lastIndex] = 0;

  return items;
}

function test ()
{
  var shifted = shiftArrayValues(['a', 'b', 'c', 'd', 'e']);
  console.log('EXPECTED:', ['b', 'c', 'd', 'e', 0]);
  console.log('ACTUAL:  ', shifted);
}
test();
