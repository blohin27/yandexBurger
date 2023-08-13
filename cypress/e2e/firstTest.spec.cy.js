describe("app works correctly with routes", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  it("should open cart page by default", function () {
    cy.contains("Оформить заказ");
  });

  it("should open delivery page after continue button click", function () {
    cy.get("button").contains("Продолжить оформление").click();
    cy.contains("Оформить заказ");
  });

  it("should open agreement page after continue button click", function () {
    cy.contains("Обычная доставка").click();
    cy.get("button").contains("Оформить заказ").click();
    cy.contains("Оформить заказ");
  });
});
