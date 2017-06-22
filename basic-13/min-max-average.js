/**
 * Find the min, the max, and the average of an array, and print to console
 * @param {Array} numbers 
 */
function minMaxAverage (numbers)
{
  var min = numbers[0];
  var max = numbers[0];
  var sum = 0;
  var average;
  
  for (var index = 0; index < numbers.length; index += 1) {
    var number = numbers[index];
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
    sum = sum + number;
  }

  average = sum / numbers.length;

  console.log('MIN:', min);
  console.log('MAX:', max);
  console.log('AVE:', average);
}

function test ()
{
  minMaxAverage([6, 7, 5, 4, 3, 1, 2]);
  console.log('SHOULD BE 1, 7, and 4');
}
test();
