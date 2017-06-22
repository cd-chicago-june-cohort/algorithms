
/**
 * Iterate through array and print each value
 * @param {Array} array 
 */
function iterateAndPrintArray (array)
{
  for (var index = 0; index < array.length; index += 1) {
    console.log(array[index]);
  }
}

function test ()
{
  iterateAndPrintArray(['a', 'b', 'c', 'd', 'e']);
}
test();
