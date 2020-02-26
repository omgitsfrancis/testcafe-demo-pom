import { Selector } from 'testcafe';

class ProductsPage {
  constructor() {
    this.inventoryList = Selector('.inventory_list');
  }
}

export default ProductsPage = new ProductsPage();