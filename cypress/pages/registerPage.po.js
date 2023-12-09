class RegisterPage {
  getGender() {
    return cy.get("#gender-male");
  }

  getFirstName() {
    return cy.get("#FirstName");
  }

  getLastName() {
    return cy.get("#LastName");
  }

  getEmail() {
    return cy.get("#Email");
  }

  getDOBirthday() {
    return cy.get('[name="DateOfBirthDay"]');
  }

  getDOMonth() {
    return cy.get('[name="DateOfBirthMonth"]');
  }

  getDOYear() {
    return cy.get('[name="DateOfBirthYear"]');
  }

  getNewsletter() {
    return cy.get("#Newsletter");
  }

  getPassword() {
    return cy.get("#Password");
  }

  getConfirmPassword() {
    return cy.get("#ConfirmPassword");
  }

  getRegisterButton() {
    return cy.get("#register-button");
  }
}

export default RegisterPage;
