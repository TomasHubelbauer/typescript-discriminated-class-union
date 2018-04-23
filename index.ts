import Item from './Item';
import AaItem from './AaItem';

const item: Item = null as Item;

if (item.type === AaItem.type) {
  // This works! `item` is now typed as `AaItem`!
  console.log(item.aa());
}
