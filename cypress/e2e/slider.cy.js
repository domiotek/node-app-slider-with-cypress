describe("Swiper Gallery Test", function () {
  it.skip('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });

  it.skip('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });

  it("Checks if spamming buttons queues consitentely", function () {
    cy.visit("http://localhost:3000");

    const nextButon = cy.get(".swiper-button-next");
    const prevButon = cy.get(".swiper-button-prev");

    for (let i = 0; i < 3; i++) {
      nextButon.click();
    }

    cy.get(".swiper-slide-active").should("contain", "Rome");

    for (let i = 0; i < 2; i++) {
      prevButon.click();
    }

    cy.get(".swiper-slide-active").should("contain", "London");

    for (let i = 0; i < 2; i++) {
      nextButon.click();
    }

    cy.get(".swiper-slide-active").should("contain", "Rome");
  });
});
