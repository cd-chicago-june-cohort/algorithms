/**
 * Create an array with odd numbers from 1 to 255
 * @return {Array} odds
 */
function arrayWithOdds ()
{
  var array = [];
  for (var x = 1; x <= 255; x += 2) { // increment by 2 so only odds
    array.push(x);
  }
  return array;
}

function test ()
{
  var oddsFrom1To255 = arrayWithOdds();
  console.log(oddsFrom1To255);
  console.log('Should be odds from 1 to 255');
}

test();
