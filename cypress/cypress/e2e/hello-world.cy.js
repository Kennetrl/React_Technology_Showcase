describe("Hello World Test", () => {
  it("should display the hello world message", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Hello, World / Cypress");
  });
});