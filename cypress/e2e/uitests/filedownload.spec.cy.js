describe("file download", () => {
  it("test excel file download", () => {
    cy.visit("https://www.smartsheet.com/test-case-templates-examples");

    cy.get(
      "a[href='/file/ic-test-case-planning-and-execution-template-10549xlsx']"
    ).then(($el) => {
      const url = $el.prop("href");

      // download the file
      cy.downloadFile(url, "cypress/downloads", "excel.xlsx");

      // verify the file
      cy.verifyDownload("excel.xlsx");

      // verify the file contents
      //read the document
      const expected = [
        null,
        null,
        "TEST TITLE",
        "PRIORITY",
        "TEST CASE ID",
        "TEST NUMBER",
        "TEST DATE",
        null,
        null,
        "PRIORITY KEY",
      ];

      // to read the file data
      cy.parseXlsx(url).then((data) => {
        console.log(data);
        cy.log("excel data ", data[0].data[1]);
        console.log("excel data ", data[0].data[1]);

        expect(data[0].data[1]).to.include.members(expected);
        // for (var i = 1; i < expected.length; i++) {
        //   expect(data[0].data[i]).to.include(expected[])
        // }
      });
    });
  });
});
