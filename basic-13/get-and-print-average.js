/**
 * Get the average of an array and print it to the console
 * @param {Array} array 
 */
function getAndPrintAverage (array)
{
  var sum = 0;  // Find Sum
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  var average = sum / array.length;  // Divide by Length
  console.log(average);
}

function test ()
{
  getAndPrintAverage([1, 2, 3, 4, 5]);
  console.log('SHOULD BE 3');
}
test();
