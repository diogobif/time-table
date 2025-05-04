describe("Check time tale functionalities", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Check if clicking on add button adds a new item to the time table list", () => {
    cy.get("ul[data-test='time-table-list'] > li").then(($prevElements) => {
      cy.get("[data-test='add-button']").click();
      cy.get("ul[data-test='time-table-list'] > li").should(
        "have.length.greaterThan",
        $prevElements.length
      );
    });
  });
});
