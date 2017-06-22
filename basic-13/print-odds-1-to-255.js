
/**
 * prints odd numbers 1 -> 255 to console
 */
function printOdds1To255 ()
{
  for (var x = 1; x <= 255; x += 2) {  // x = x + 2, instead of x = x + 1
    console.log(x);
  }
}

function test ()
{
  printOdds1To255();
}

test();
