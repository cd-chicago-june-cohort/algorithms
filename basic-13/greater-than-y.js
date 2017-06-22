
function greaterThanY (array, y)
{
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item > y) {
      count = count + 1;
    }
  }
  return count;
} 

function test ()
{
  var countGreaterThanY = greaterThanY([1, 3, 5, 7, 9], 6);
  console.log('EXPECTED:', 2);
  console.log('ACTUAL:  ', countGreaterThanY);
}
test();
