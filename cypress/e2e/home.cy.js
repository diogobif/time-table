describe("Check if the app is rendering", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("check if welcome message is visible", () => {
    cy.get('[data-test="home-header"]').should("be.visible");
  });

  it("check if timetable list is started with one element at least", () => {
    cy.get('ul[data-test="time-table-list"]').should("be.visible");
    cy.get('ul[data-test="time-table-list"]').should(
      "have.length.greaterThan",
      0
    );
  });

  it("Check if add button is visible", () => {
    cy.get("[data-test='add-button'").should("be.visible");
  });
});
