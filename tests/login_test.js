/* Import page objects */
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

fixture`Login Page`
  .page("https://www.saucedemo.com/");


test("Login with correct username and password", async t => {
  await t
    .typeText(LoginPage.usernameInput, "standard_user")    
    .typeText(LoginPage.passwordInput, "secret_sauce")
    .click(LoginPage.loginButton)                  
    .expect(ProductsPage.inventoryList.visible).ok("inventory list should appear"); 
});


test("Login with incorrect password", async t => {
  await t
    .typeText(LoginPage.usernameInput, "standard_user")    
    .typeText(LoginPage.passwordInput, "incorrect_password")
    .click(LoginPage.loginButton)          
    .expect(LoginPage.error.innerText).contains("Username and password do not match any user in this service")
});
