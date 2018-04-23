import ItemType from './ItemType';

export default abstract class ItemBase {
  public abstract readonly type: ItemType;
  public abstract foo(): string;
}
