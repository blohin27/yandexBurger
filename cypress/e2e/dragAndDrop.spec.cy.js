describe("DragAndDropIngredients Test", function () {
  before(function () {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    }).as("getIngredients");
  });

  it("DragAndDropIngredients", function () {
    // eslint-disable-next-line testing-library/await-async-utils
    // cy.wait("@getIngredients");
    cy.get('[data-cy="my-element"]').eq(0).trigger("dragstart");
    cy.get('[data-cy="my-constructor"]').eq(0).trigger("drop");

    cy.get('[data-cy="my-element"]').eq(1).trigger("dragstart");
    cy.get('[data-cy="my-constructor"]').eq(0).trigger("drop");

    cy.get('[data-cy="my-constructor"]').should("contain", "Соус1");
    cy.get('[data-cy="my-constructor"]').should("contain", "Булка1 (вниз)");
    cy.get('[data-cy="my-constructor"]').should("contain", "Булка1 (вниз)");
  });
});
