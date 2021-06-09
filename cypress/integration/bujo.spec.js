/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    // Change for actual testing
    cy.visit(
      "https://catch-22-e0c66--pr167-issue-93-add-testing-1wncq2rh.web.app/login.html"
    );
    cy.viewport(1000, 600);
    cy.wait(1000);
    cy.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  // https://on.cypress.io/interacting-with-elements

  it("Test signup", () => {
    cy.get(":nth-child(1) > a").click({ force: true });
    cy.wait(1000);
    cy.get("#name").type("test").should("have.value", "test");
    cy.get("#email")
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get("#password").type("password").should("have.value", "password");
    cy.get(".btn-block").click({ force: true });
    cy.get("#signup-error").should(($err) => {
      expect($err).to.contain("already in use");
    });
    cy.get("#name").clear().type("test").should("have.value", "test");
    let uid = new Date().getTime();
    cy.get("#email")
      .clear()
      .type(uid + "@test.com")
      .should("have.value", uid + "@test.com");
    cy.get("#password")
      .clear()
      .type("password")
      .should("have.value", "password");
    cy.get(".btn-block").click({ force: true });
  });

  it("Test password reset", () => {
    cy.get(":nth-child(2) > a").click({ force: true });
    cy.wait(1000);
    cy.get(".btn").click({ force: true });
    cy.get("#reset-error").should(($err) => {
      expect($err).to.contain("badly");
    });
    cy.get("#email")
      .clear()
      .type("test@sdkj.com")
      .should("have.value", "test@sdkj.com");
    cy.get(".btn").click({ force: true });
    cy.get("#reset-error").should(($err) => {
      expect($err).to.contain("no user record");
    });
    cy.get("#email")
      .clear()
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get(".btn").click({ force: true });
    cy.get("#reset-error").should(($err) => {
      expect($err).to.contain("password reset link");
    });
  });

  it("Can log in with confirmed account", () => {
    cy.get("#email")
      .clear()
      .type("test@sdkj.com")
      .should("have.value", "test@sdkj.com");
    cy.get("#password")
      .clear()
      .type("password")
      .should("have.value", "password");
    cy.get("#login-form").submit();
    cy.get("#login-error").should(($err) => {
      expect($err).to.contain("no user record");
    });

    cy.get("#email")
      .clear()
      .type("test@test.com", { delay: 100 })
      .should("have.value", "test@test.com");

    cy.get("#password")
      .clear()
      .type("password", { delay: 100 })
      .should("have.value", "password");

    cy.get("#login-form").submit();
    cy.wait(3000);

    cy.get("h6").should("contain", "How are you feeling?");

    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);
    cy.viewport(500, 300);
    cy.wait(200);
    cy.viewport(1000, 600);
    cy.reload();
    cy.wait(2000);

    cy.get("#nav-calendar").click({ force: true });
    cy.wait(1000);
    cy.get("h1").should("contain", "Calendar");

    cy.get("#nav-mood").click({ force: true });
    cy.wait(1000);
    cy.get("h1").should("contain", "Mood Tracker");

    cy.go("back");
    cy.wait(1000);
    cy.get("h1").should("contain", "Calendar");

    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.reload();
    cy.wait(1000);
    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get(".btn-danger").click({ force: true });
  });

  it("Test daily log", () => {
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();

    cy.wait(2000);

    cy.get("#toggle").click({ force: true }).click({ force: true });
    cy.get("#bold").click({ force: true }).click({ force: true });
    cy.get("#italic").click({ force: true }).click({ force: true });
    cy.get("#underline").click({ force: true }).click({ force: true });

    cy.get("#previous").click({ force: true }).click({ force: true }).click({
      force: true,
    });
    cy.get("#next").click({ force: true }).click({ force: true });
    cy.get("#today").click({ force: true });
    // should we go into the future?
    cy.get("#next").click({ force: true }).click({ force: true });
    cy.get("#today").click({ force: true });

    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get(".btn-danger").click({ force: true });
  });

  it("Test mood tracker", () => {
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();
    cy.wait(2000);

    cy.get("#very-happy").click({ force: true });
    cy.get("#happy").click({ force: true });
    cy.get("#sad").click({ force: true });
    cy.get("#very-sad").click({ force: true });
    cy.get("#neutral").click({ force: true });

    cy.get("#nav-mood").click({ force: true });
    cy.wait(1000);
    cy.viewport(1920, 1080);
    cy.get("h1").should("contain", "Mood Tracker");
    cy.get("[data-cy=current-date]", {
      timeout: 10000,
    }).should("have.attr", "style", "background-color:#FECD32");
    cy.get("#happy").click({ force: true });
    cy.get("#sad").click({ force: true });
    cy.get("#very-sad").click({ force: true });
    cy.get("#neutral").click({ force: true });
    cy.get("#very-happy").click({ force: true });
    cy.get("[data-cy=current-date]").should(
      "have.attr",
      "style",
      "background-color:#55D805"
    );
    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get("#nav-mood").click({ force: true });
    cy.wait(1000);
    cy.get("[data-cy=current-date]").should(
      "have.attr",
      "style",
      "background-color:#55D805"
    );

    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get(".btn-danger").click({ force: true });
  });

  it("Test rose and thorn", () => {
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();

    cy.wait(2000);

    cy.get("#rose").dblclick({ force: true }).type("test");
    cy.get("#thorn").dblclick({ force: true }).type("test2");
    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get(".navbar-brand").click({ force: true });
    cy.wait(1000);
    cy.get("#rose").should("contain", "test");
    cy.get("#thorn").should("contain", "test2");
  });

  it("Test calendar", () => {
    cy.wait(2000);

    cy.get("#nav-calendar").click({ force: true });
    cy.wait(2000);
    cy.get("#datepicker2").click({ force: true });
    cy.get('[data-date="1625011200000"]').click({ force: true });
    cy.get('[data-date="1624924800000"]').click({ force: true });
    cy.get("#datepicker1").click({ force: true });
    cy.get('[data-date="1616457600000"]').click({ force: true });
    cy.get('[data-date="1616544000000"]').click({ force: true });

    cy.get("#button-add").click({ force: true });
    cy.get("#newproresstitle").type("Test2");
    cy.get("#newstartdate").click({ force: true });
    cy.get('[data-date="1622505600000"]').click({ force: true });
    cy.get("#newenddate").click({ force: true });
    cy.get('[data-date="1625011200000"]').click({ force: true });
    cy.get("#button-submit").click({ force: true });

    cy.get(".navbar-brand").click({ force: true });
    cy.wait(5000);
    cy.get("label")
      .should("contain.text", "6-30")
      .should("contain.text", "Test2");

    cy.get("#nav-calendar").click({ force: true });
    cy.wait(2000);
    cy.get("#end_1623269478085").click({ force: true });
    cy.get('[data-date="1623196800000"]').click({ force: true });
    cy.get("#end_1623269478085").click({ force: true });
    cy.get('[data-date="1624406400000"]').click({ force: true });
    cy.get("#end_1623269478085").click({ force: true });
    cy.get(
      ".datepicker-days > .table-condensed > thead > :nth-child(2) > .next"
    ).click({ force: true });
    cy.get('[data-date="1625616000000"]').click({ force: true });
    cy.get("#start_1623269478085").click({ force: true });
    cy.get('[data-date="1623369600000"]').click({ force: true });
    cy.get("#start_1623269478085").click({ force: true });
    cy.get('[data-date="1622505600000"]').click({ force: true });
    cy.get("#end_1623269478085").click({ force: true });
    cy.get(
      ".datepicker-days > .table-condensed > thead > :nth-child(2) > .prev"
    ).click({ force: true });
    cy.get('[data-date="1625011200000"]').click({ force: true });

    // cy.get(".button-remove").click({force: true});
  });

  it("Test settings", () => {
    cy.visit(
      "https://catch-22-e0c66--pr167-issue-93-add-testing-1wncq2rh.web.app/signup.html"
    );
    cy.wait(1000);
    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get("#wave > img").click({ force: true });
    cy.get("#save").click({ force: true });
    cy.get("#graph > img").click({ force: true });
    cy.get("#save").click({ force: true });
    cy.get("#topo > img").click({ force: true });
    cy.get("#save").click({ force: true });
    cy.get('[fill="url(#gradient-black-0)"]')
      .click(80, 75) // click 80px on x coord and 75px on y coord
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165);
    cy.reload();
    cy.wait(2000);
    cy.get("#nav-settings").click({ force: true });
    cy.wait(1000);
    cy.get(".btn-danger").click({ force: true });
  });
});
