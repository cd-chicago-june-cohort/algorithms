
/**
 * Replace existing item in array with new item
 *    ( input array )
 * @param {Array} items 
 * @param {any} oldItem 
 * @param {any} newItem 
 * @return {Array} new array with replaced item
 */
function replaceItem (items, oldItem, newItem)
{
  var newArray = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item === oldItem) {
      newArray.push(newItem);
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}


function test ()
{
  var veggies = [ 'carrots', 'tomatoes', 'potatoes', 'cucumbers', 'spinach' ];

  var newVeggies = replaceItem(veggies, 'tomatoes', 'radishes');  // tomatoes aren't vegetables (or so they say)

  console.log('EXPECTED:', [ 'carrots', 'radishes', 'potatoes', 'cucumbers', 'spinach' ]);
  console.log('ACTUAL:  ', newVeggies);
}

test();
