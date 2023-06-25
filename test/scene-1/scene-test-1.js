const chai = require("chai");
const scenePage1 = require("../../src/pages/scene.1.pages");
const constant = require("../../constant");
const AllureReporter = require("@wdio/allure-reporter");

describe("Scenario 1", () => {
  before(("Open Url Ebay Successfully "), async () => {
    AllureReporter.step("Open Url Ebay");
    await scenePage1.open();
    const getPageTitle = await browser.getTitle();
    console.log(getPageTitle, "The page title : ", getPageTitle);
    chai.assert.equal(getPageTitle, constant.EBAY_TITLE, "Ebay Title Not Found");
  });

  it("User search products with keywords Cell Phones & Smartphones with applying 3 Filters", async () => {
    AllureReporter.addSeverity("Critical");
    AllureReporter.addDescription("Validate user can apply 3 Filters (Screen Size, Item Location, Price")
    await scenePage1.searchProduct(constant.KEYWORDS_SEARCH);
    await scenePage1.applyFilters();
    await scenePage1.verifyFilters();
  });
});
