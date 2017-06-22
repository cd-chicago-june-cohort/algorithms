/**
 * Square all values in given array
 * @param {Array} array 
 * @return {Array}
 */
function squareTheValues (array)
{
  for (var index = 0; index < array.length; index += 1) {
    var num = array[index];
    array[index] = num * num;
  }
  return array;
}

function test ()
{
  var squared = squareTheValues([1, 2, 3, 4, 5]);
  console.log('EXPECTED:', [1, 4, 9, 16, 25]);
  console.log('ACTUAL:  ', squared);
}

test();
