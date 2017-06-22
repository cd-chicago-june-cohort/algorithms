
/**
 * Solve the power of a number
 * @param {number} num 
 * @param {number} pow 
 * @return {number}
 */
function power (num, pow)
{
  var output = 1;
      // for `pow` iterations
  for (var it = 0; it < pow; it += 1) {
    output = output * num;
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
