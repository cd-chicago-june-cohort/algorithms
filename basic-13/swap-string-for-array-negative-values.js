/**
 * When passed array, replace any negative values with the string 'Dojo'
 * @param {Array} array 
 */
function swapStringForArrayNegativeValues (array)
{
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 'Dojo';
    }
  }
}

function test ()
{
  var values = [1, 2, -1, -2, 3];
  swapStringForArrayNegativeValues(values);
  console.log('EXPECTED:', [1, 2, 'Dojo', 'Dojo', 3]);
  console.log('ACTUAL:  ', values);
}

test();
