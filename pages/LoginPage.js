import { Selector, t } from 'testcafe';

class LoginPage {
  constructor() {
    this.usernameInput = Selector("#user-name");
    this.passwordInput = Selector("#password");
    this.loginButton = Selector("[value='LOGIN']");
    this.error = Selector("[data-test='error']");
  }

  async loginAsUser(username="standard_user", password="secret_sauce") {
    await t
      .typeText(this.usernameInput, username)    
      .typeText(this.passwordInput, password)
      .click(this.loginButton)             
  }
}

export default LoginPage = new LoginPage();