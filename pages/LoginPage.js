import { Selector } from 'testcafe';

class LoginPage {
  constructor() {
    this.usernameInput = Selector("#user-name");
    this.passwordInput = Selector("#password");
    this.loginButton = Selector("[value='LOGIN']");
    this.error = Selector("[data-test='error']");
  }
}

export default LoginPage = new LoginPage();