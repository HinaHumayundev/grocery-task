/// <reference types="cypress" />

describe("TableComponent", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the correct UI elements", () => {
    cy.get("[data-testid=filter-button]").should("exist");
    cy.get("[data-testid=weight-header]").should("exist");
    cy.get("[data-testid=pagination]").should("exist");
  });

  it("filters items by section", () => {
    cy.get("[data-testid=filter-button]").click();

    cy.wait(4000);
    cy.contains("Dairy").click({ force: true });
    cy.get("[data-testid=menu-item-dairy]").click();

    cy.get("tbody > tr").each(($row) => {
      cy.wrap($row).find("td").eq(1).should("contain", "Dairy");
    });
    cy.get("[data-testid=weight-header]").click();

    cy.get("tbody > tr").then(($rows) => {
      const weights = $rows.map((index, el) =>
        parseFloat(Cypress.$(el).find("td").eq(3).text())
      );
      const sortedWeights = [...weights].sort((a, b) => a - b);

      expect(weights.get()).to.deep.equal(sortedWeights);
    });
    cy.get('div[role="combobox"]').click();
    cy.get('li[data-value="25"]').click();

    cy.get("[data-testid=pagination]").contains("2").click();
    cy.get("tbody > tr").should("have.length.lt", 25);
  });
});
