
/**
 * Pass in 2 numbers and an operator, perform the operation
 * 
 * @param {number} x 
 * @param {string} operator 
 * @param {number} y 
 * @return {number}
 */
function doMath(x, operator, y)
{
  if (operator === '+') {
    return x + y;
  }
  if (operator === '-') {
    return x - y;
  }
  if (operator === '*') {
    return x * y;
  }
  if (operator === '/') {
    return x / y;
  }
  return NaN;  // Not a Number
}

function test ()
{
  var answer;

  answer = doMath(4, '+', 5);
  console.log('EXPECTED:', 4+5);
  console.log('ACTUAL:  ', answer);

  answer = doMath(4, '-', 5);
  console.log('EXPECTED:', 4-5);
  console.log('ACTUAL:  ', answer);

  answer = doMath(4, '*', 5);
  console.log('EXPECTED:', 4*5);
  console.log('ACTUAL:  ', answer);

  answer = doMath(4, '/', 5);
  console.log('EXPECTED:', 4/5);
  console.log('ACTUAL:  ', answer);

}

test();

