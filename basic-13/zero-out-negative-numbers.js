/**
 * When passed an array of numbers, if any are negative, set them to 0
 * @param {Array} numbers 
 * @return {Array}
 */
function zeroOutNegativeNumbers (numbers)
{
  for (var index = 0; index < numbers.length; index += 1) {
    var number = numbers[index];
    if (number < 0) {
      numbers[index] = 0;
    }
  }
  return numbers;
}

function test ()
{
  var zeroed = zeroOutNegativeNumbers([5, 3, -3, -2, 1, 0, -9]);
  console.log('EXPECTED:', [5, 3, 0, 0, 1, 0, 0]);
  console.log('ACTUAL:  ', zeroed);
}

test();
