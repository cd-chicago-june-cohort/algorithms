
/**
 * Remove item from array
 *   ( Should alter the input array )
 * @param {Array} items 
 * @param {any} itemToRemove 
 */
function removeItem (items, itemToRemove)
{
  var foundItem = false;
  for (var i = 0; i < items.length; i++) {
    if (items[i] === itemToRemove) {
      // Toggle flag so we know to start shifting
      foundItem = true;
    }
    if (foundItem) {
      // Shift elements to left
      items[i] = items[i + 1];
    }
  }
  if (foundItem) {
    // Remove the last item and shorten the length of the array
    items.pop();
  }
}


function test ()
{
  var veggies = [ 'carrots', 'tomatoes', 'potatoes', 'cucumbers', 'spinach' ];

  removeItem(veggies, 'tomatoes');  // tomatoes aren't vegetables (or so they say)

  console.log('EXPECTED:', [ 'carrots', 'potatoes', 'cucumbers', 'spinach' ]);
  console.log('ACTUAL:  ', veggies);
}

test();
