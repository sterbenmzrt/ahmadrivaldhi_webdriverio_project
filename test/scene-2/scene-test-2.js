const chai = require("chai");
const scenePage2 = require("../../src/pages/scene.2.pages");
const constant = require("../../constant");
const AllureReporter = require("@wdio/allure-reporter");

describe("Scenario 2", () => {
  before(("Open Url Ebay Successfully "), async () => {
    AllureReporter.step("Open Url Ebay");
    await scenePage2.open();
    const getPageTitle = await browser.getTitle();
    console.log(getPageTitle, "The page title : ", getPageTitle);
    chai.assert.equal(getPageTitle, constant.EBAY_TITLE, "Ebay Title Not Found");
  });

  it("User search products with keywords Macbook then change the category to Computer/Tablets ", async () => {
    AllureReporter.addSeverity("Critical");
    AllureReporter.addDescription("Validate First Results Card List Match with keywords search when user changes category to Computer/Tablets")
    await scenePage2.searchProduct(constant.KEYWORDS_SEARCH_2);
    await scenePage2.changeCategoryComputerTablets();
    await scenePage2.verifyResultsChangeCategory();
  });
});
