import ItemBase from "./ItemBase";

export default class BbItem extends ItemBase {
  public static readonly type = 'bb';
  public readonly type = BbItem.type;
  public foo() {
    return this.type;
  }
  public bb() {
    return this.foo();
  }
}
