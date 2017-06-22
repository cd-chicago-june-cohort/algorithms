
/**
 * Replace existing item in array with new item
 *    ( alters input array )
 * @param {Array} items 
 * @param {any} oldItem 
 * @param {any} newItem 
 */
function replaceItem (items, oldItem, newItem)
{
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item === oldItem) {
      items[i] = newItem;
    }
  }
}


function test ()
{
  var veggies = [ 'carrots', 'tomatoes', 'potatoes', 'cucumbers', 'spinach' ];

  // Because it alters the input array, we don't need to set it to a variable
  replaceItem(veggies, 'tomatoes', 'radishes');  // tomatoes aren't vegetables (or so they say)

  console.log('EXPECTED:', [ 'carrots', 'radishes', 'potatoes', 'cucumbers', 'spinach' ]);
  console.log('ACTUAL:  ', veggies);
}

test();
