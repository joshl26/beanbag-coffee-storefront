describe("Product page", () => {
  it("fetches product with handle [featured-medium-roast]", () => {
    cy.viewport(1920, 1080)
    cy.visit("/products/featured-medium-roast")

    cy.get("h2").contains("Featured Medium Roast")
  })

  it("adds a product to the cart", () => {
    cy.viewport(1920, 1080)
    cy.visit("/products/featured-medium-roast")

    // cy.get("img.button").click()
    cy.get(":nth-child(2) > .button").click()
    cy.wait(2000)
    cy.get("#button").click()
    cy.wait(2000)
    cy.get("[data-cy=cart_quantity]").contains("Cart (1)")
  })

  it("adds a product twice to the cart", () => {
    cy.viewport(1920, 1080)
    cy.visit("/products/featured-medium-roast")

    // cy.get("img.button").click()
    cy.get(":nth-child(2) > .button").click()
    cy.wait(2000)
    cy.get("#button").click()
    cy.wait(2000)
    cy.get("#button").click()

    cy.wait(2000)
    cy.get("[data-cy=cart_quantity]").contains("Cart (2)")
  })

  // it("changes the current image by clicking a thumbnail", () => {
  //   cy.visit("/products/t-shirt")

  //   cy.get("[data-cy=current_image]")
  //     .should("have.attr", "src")
  //     .and("match", /.+(tee\-black\-front).+/)

  //   cy.get("[data-cy=product_image_2]").click()

  //   cy.get("[data-cy=current_image]")
  //     .should("have.attr", "src")
  //     .and("match", /.+(tee\-black\-back).+/)
  // })
})
