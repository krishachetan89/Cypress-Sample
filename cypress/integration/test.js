describe("Verify the website", function() {
  before(function() {
    cy.visit("/")
  })
  beforeEach(function() {
    cy.fixture("sample").then(function(sample) {
      this.sample = sample
    })
  })
  it("verify the status of the site", function() {
    cy.request("/about").should(function(response) {
      expect(response.status).to.eq(200)
    })
  })
  it("verify the heading of the blog", function() {
    cy.get(".Author Homepage")
      .should("have.text", this.sample.heading)
  })
})