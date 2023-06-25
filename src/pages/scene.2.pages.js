const BasePage = require("../../base/BasePage");
const locators = require("../../src/locators/BaseLocators");
const chai = require("chai");
const constant = require("../../constant");

class ScenePage2 extends BasePage{
    async searchProduct(value){
        //verify search bar is displayed
        const verifyDisplayed =  await locators.searchBar.isDisplayed();
        chai.assert.isTrue(verifyDisplayed);
        console.log(verifyDisplayed, "Search product successfully displayed");
        // do search product
        await locators.searchBar.addValue(value);
        const getText = await locators.searchBar.getValue();
        console.log(getText);
        chai.assert.equal(getText, constant.KEYWORDS_SEARCH_2, "Keywords not same");
        await locators.searchBtn.click();
        await locators.cardListProduct.waitForDisplayed();
        const verifyCardList = await locators.cardListProduct.isDisplayed();
        chai.assert.isTrue(verifyCardList, "Result is not True");
        console.log("Successfully Search Product with Keywords: " + value);
        await browser.pause(3000);
    }

    async changeCategoryComputerTablets(){
        const verifyComputerTablets = await locators.computerTabletsCategory.isDisplayed();
        chai.assert.isTrue(verifyComputerTablets);
        console.log("Category Computer Tablets Successfully Displayed");
        await locators.computerTabletsCategory.isClickable();
        await locators.computerTabletsCategory.click();
        await locators.cardListProduct.waitForDisplayed();
        const verifyCardList = await locators.cardListProduct.isDisplayed();
        chai.assert.isTrue(verifyCardList, "Result is not True");
        console.log("Successfully Change Category to Computer/Tablets ");
        await browser.pause(3000);
    }

    async verifyResultsChangeCategory(){   
        const getFirstResult = await locators.firstResultCardListProduct.getText();
        console.log(getFirstResult);
        chai.assert.match(getFirstResult,/MacBook/,"Result does not match")
        console.log("Successfully First Result Match with Keywords Search MacBook");
    }
}
module.exports = new ScenePage2();