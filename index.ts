type ItemType =
  | typeof AaItem.type
  | typeof BbItem.type
  | typeof CcItem.type
;

abstract class ItemBase {
  abstract readonly type: ItemType;
  abstract foo(): string;
}

class AaItem extends ItemBase {
  public static readonly type = 'aa';
  public readonly type = AaItem.type;
  public foo() {
    return this.type;
  }
}

class BbItem extends ItemBase {
  public static readonly type = 'bb';
  public readonly type = BbItem.type;
  public foo() {
    return this.type;
  }
}

class CcItem extends ItemBase {
  public static readonly type = 'cc';
  public readonly type = CcItem.type;
  public foo() {
    return this.type;
  }
}

type Item = AaItem | BbItem | CcItem;

const item: Item = null as Item;

if (item.type === AaItem.type) {
  // This works!
}
