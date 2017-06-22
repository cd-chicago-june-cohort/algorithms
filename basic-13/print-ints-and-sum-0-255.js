
/**
 * prints numbers 0 -> 255 to console along with current sum of all nums
 */
function printIntsAndSum0To255 ()
{
  var sum = 0;
  for (var x = 0; x <= 255; x += 1) {
    sum = sum + x;
    console.log(x, sum);
  }
}

function test ()
{
  printIntsAndSum0To255();
}

test();
