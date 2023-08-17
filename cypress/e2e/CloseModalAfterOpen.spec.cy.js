describe("CloseModalAfterOpen", function () {
  before(function () {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    }).as("getIngredients");
  });

  it("CloseModal", function () {
    // eslint-disable-next-line testing-library/await-async-utils
    // cy.wait("@getIngredients");
    cy.get('[data-cy="my-element"]').eq(0).click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });
});
