import ItemBase from "./ItemBase";

export default class AaItem extends ItemBase {
  public static readonly type = 'aa';
  public readonly type = AaItem.type;
  public foo() {
    return this.type;
  }
  public aa() {
    return this.foo();
  }
}
