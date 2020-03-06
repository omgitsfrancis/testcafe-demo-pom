/* Import page objects */
import LoginPage from "../pages/LoginPage";
import ProductsPage, {inventoryItem} from "../pages/ProductsPage";
import YourCartPage from "../pages/YourCartPage";

fixture`Product Page`
  .page("https://www.saucedemo.com/")
  .beforeEach( async t => {
    await LoginPage.loginAsUser();
    await t.navigateTo("/inventory.html")
  })


test("Add Item to Cart - should be removable", async t => {
  const backpack = inventoryItem("Sauce Labs Backpack")
  await t
    .click(backpack.itemButton)
    .expect(backpack.itemButton.innerText).eql("REMOVE")
});

test("Add Item to Cart - should increment counter", async t => {
  const backpack = inventoryItem("Sauce Labs Backpack")
  const bikeLight = inventoryItem("Sauce Labs Bike Light")
  const tShirt = inventoryItem("Sauce Labs Bolt T-Shirt")
  await t
    .click(backpack.itemButton)
    .expect(YourCartPage.cartCounter.innerText).eql("1")
    .click(bikeLight.itemButton)
    .expect(YourCartPage.cartCounter.innerText).eql("2")
    .click(tShirt.itemButton)
    .expect(YourCartPage.cartCounter.innerText).eql("3")
});

test("Remove Item from Cart - should decrement counter", async t => {
  const backpack = inventoryItem("Sauce Labs Backpack")
  const bikeLight = inventoryItem("Sauce Labs Bike Light")
  const tShirt = inventoryItem("Sauce Labs Bolt T-Shirt")
  await t
    .click(backpack.itemButton)
    .click(bikeLight.itemButton)
    .click(tShirt.itemButton)
    .expect(YourCartPage.cartCounter.innerText).eql("3")

    .click(backpack.itemButton)
    .expect(YourCartPage.cartCounter.innerText).eql("2")

    .click(bikeLight.itemButton)
    .expect(YourCartPage.cartCounter.innerText).eql("1")

    .click(tShirt.itemButton)
    .expect(YourCartPage.cartCounter.exists).notOk("counter should not exist")

});

test("Add Item to Cart - should appear in cart", async t => {
  const backpack = inventoryItem("Sauce Labs Backpack")
  const bikeLight = inventoryItem("Sauce Labs Bike Light")
  const tShirt = inventoryItem("Sauce Labs Bolt T-Shirt")
  await t
    .click(backpack.itemButton)
    .click(bikeLight.itemButton)
    .click(tShirt.itemButton)

    .click(YourCartPage.cartButton)
    .expect(YourCartPage.cartItemNames.withText("Sauce Labs Backpack").exists).ok("Item Should be in cart")
    .expect(YourCartPage.cartItemNames.withText("Sauce Labs Bike Light").exists).ok("Item Should be in cart")
    .expect(YourCartPage.cartItemNames.withText("Sauce Labs Bolt T-Shirt").exists).ok("Item Should be in cart")


});