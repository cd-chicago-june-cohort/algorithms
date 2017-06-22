
/**
 * Remove item from array
 *   ( Should not alter the input array, but return a new array )
 * @param {Array} items 
 * @param {any} itemToRemove 
 * @return {Array} new array without itemToRemove
 */
function removeItem (items, itemToRemove)
{
  var newArray = [];
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    if (currentItem !== itemToRemove) {
      newArray.push(currentItem);
    }
  }
  return newArray;  
}


function test ()
{
  var veggies = [ 'carrots', 'tomatoes', 'potatoes', 'cucumbers', 'spinach' ];

  var newVeggies = removeItem(veggies, 'tomatoes');  // tomatoes aren't vegetables (or so they say)

  console.log('EXPECTED:', [ 'carrots', 'potatoes', 'cucumbers', 'spinach' ]);
  console.log('ACTUAL:  ', newVeggies);
}

test();
