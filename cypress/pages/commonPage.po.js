class CommonPage {
  getRegisterLink() {
    return cy.get(".ico-register");
  }

  getLoginLink() {
    return cy.get(".ico-login");
  }

  getWishlistLink() {
    return cy.get(".ico-wishlist");
  }

  getDynamicLink(link) {
    return cy.visit(link);
  }
}

export default CommonPage;
