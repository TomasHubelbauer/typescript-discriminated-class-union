import ItemBase from "./ItemBase";

export default class CcItem extends ItemBase {
  public static readonly type = 'cc';
  public readonly type = CcItem.type;
  public foo() {
    return this.type;
  }
  public cc() {
    return this.foo();
  }
}
