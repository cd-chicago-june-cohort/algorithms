
/**
 * Solve the power of a number
 * @param {number} num 
 * @param {number} pow 
 * @return {number}
 */
function power (num, pow)
{
  var output = 1;
  while (pow > 0) {
    output *= num;
    pow -= 1;
  }
  return output;
}

function test ()
{
  var answer = power(3, 4);

  console.log('EXPECTED:', 3*3*3*3);
  console.log('ACTUAL:  ', answer);
}

test();
