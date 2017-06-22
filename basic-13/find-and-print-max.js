/**
 * Find the largest value in array and print to console
 * @param {Array} array 
 */
function findAndPrintMax (array)
{
  var max = array[0];
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
}

function test ()
{
  findAndPrintMax([5, 1, 4, 8, 2, 3, 1]);
  console.log('SHOULD BE 8');
}
test();