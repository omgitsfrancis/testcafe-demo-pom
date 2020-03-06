import { Selector } from 'testcafe';

class YourCartPage {
  constructor() {
    this.cartButton = Selector(".shopping_cart_link")
    this.cartCounter = Selector(".shopping_cart_badge")
    this.cartItems = Selector(".cart_item")
    this.cartItemNames = Selector(".inventory_item_name");
    this.continueShoppingButton = Selector("a").withText("Continue Shopping")
    this.checkoutButton = Selector(".checkout_button")
  }
}



export default YourCartPage = new YourCartPage();