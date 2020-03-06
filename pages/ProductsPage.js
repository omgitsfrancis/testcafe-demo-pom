import { Selector } from 'testcafe';

class ProductsPage {
  constructor() {
    this.inventoryList = Selector('.inventory_list');
  }
}

class InventoryItem {
  constructor(itemName) {
    this.item = Selector(".inventory_item_name").withText(itemName).parent(".inventory_item")
    this.itemButton = this.item.find(".btn_inventory")
    this.itemName = this.item.find(".inventory_item_name")
  }
}

export default ProductsPage = new ProductsPage();
export function inventoryItem(item) {return new InventoryItem(item)}