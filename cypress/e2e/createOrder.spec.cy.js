describe("CreateOrder Test", function () {
  before(function () {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");

    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    }).as("getIngredients");

    cy.intercept("POST", "https://norma.nomoreparties.space/api/auth/token", {
      fixture: "tokenAccess.json",
    });

    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", {
      fixture: "user.json",
    });

    cy.intercept("POST", "https://norma.nomoreparties.space/api/auth/login", {
      fixture: "login.json",
    });

    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", {
      fixture: "responceCreateOrder.json",
    });

    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.setCookie("accessToken", "test-accessToken");
  });

  it("CreateOrder", function () {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", {
      fixture: "user.json",
    });
    cy.get('[data-cy="my-element"]').eq(0).trigger("dragstart");
    cy.get('[data-cy="my-constructor"]').eq(0).trigger("drop");

    cy.get('[data-cy="my-element"]').eq(1).trigger("dragstart");
    cy.get('[data-cy="my-constructor"]').eq(0).trigger("drop");

    cy.get('[data-cy="my-button-create-order"]').click();
  });
});
