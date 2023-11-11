class LoginPage {
  getUsername(user) {
    return console.log(user);
  }

  getPassword(pass) {
    return console.log(pass);
  }

  getLoginButton() {
    return "loginButton";
  }

  userLogin(username, password) {
    this.getUsername(username);
    this.getPassword(password);
    this.getLoginButton();
  }
}

export default new LoginPage();
