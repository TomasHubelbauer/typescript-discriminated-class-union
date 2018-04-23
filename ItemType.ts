import AaItem from './AaItem';
import BbItem from './BbItem';
import CcItem from './CcItem';

type ItemType =
  | typeof AaItem.type
  | typeof BbItem.type
  | typeof CcItem.type
;

export default ItemType;
