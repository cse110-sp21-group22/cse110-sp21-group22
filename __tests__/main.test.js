describe("Basic user flow for BuJo App", () => {
  beforeAll(async () => {
    await page.goto("http://127.0.0.1:5501/source");
    await page.waitForTimeout(500);
  });

  it("Can log in with confirmed account", async () => {
    await expect(page).toMatch("Please sign in");
    // fill out username (email) and password
    await expect(page).toFillForm("#login-form", {
      email: "test@test.com",
      password: "password",
    });
    // submit
    await expect(page).toClick('[name="submit"]');
  }, 10000);

  // test 1
  it("Test1: Verify the url is correct when clicking on the calendar link", async () => {
    await page.waitForTimeout(5000);
    await page.click(".nav-item");
    expect(page.url()).toContain("calendar");
  }, 10000);

  // test 2
  it("Test2: Verify the url is correct when clicking on the mood tracker link", async () => {
    await page.waitForTimeout(1000);
    await page.click(".nav-item:nth-of-type(2)");
    expect(page.url()).toContain("mood");
  }, 10000);

  // test 3
  it("Test3: Verify the url is correct when clicking on the settings link", async () => {
    await page.waitForTimeout(1000);
    await page.click(".nav-item:nth-of-type(3)");
    expect(page.url()).toContain("settings");
  }, 10000);

  // test 4
  it("Test4: Verify the url is correct when clicking on the home link", async () => {
    await page.waitForTimeout(1000);
    await page.click(".navbar-brand");
    expect(page.url()).toContain("#");
  }, 10000);

  // test 5
  it("Test5: Verify Rose And Thorn popup works", async () => {
    await page.waitForTimeout(1000);
    await page.click("button");
    expect(page.url()).toContain("#popup1");
  });
});
