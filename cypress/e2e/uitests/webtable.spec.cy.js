describe("webtable handling", () => {
  it("test bookname mapping", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get('[name="BookTable"] tbody tr td:nth-child(1)').each(
      ($element, index) => {
        if ($element.text() == "Master In Java") {
          // check Author data
          cy.get('[name="BookTable"] tbody tr td:nth-child(2)')
            .eq(index)
            .then(($el) => {
              expect($el.text()).to.match(/[A-Za-z]/);
            });

          // check subject data
          cy.get('[name="BookTable"] tbody tr td:nth-child(3)')
            .eq(index)
            .then(($el) => {
              expect($el.text()).to.match(/[A-Za-z]/);
            });

          // check price data
          cy.get('[name="BookTable"] tbody tr td:nth-child(4)')
            .eq(index)
            .then(($el) => {
              expect($el.text()).to.match(/[0-9]/);
            });
        }
      }
    );
  });
});
