const BasePage = require("../../base/BasePage");
const locators = require("../../src/locators/BaseLocators");
const chai = require("chai");
const constant = require("../../constant");

class ScenePage1 extends BasePage {
    //page action:
    async searchProduct(value){
        //verify search bar is displayed
        const verifyDisplayed =  await locators.searchBar.isDisplayed();
        chai.assert.isTrue(verifyDisplayed);
        console.log(verifyDisplayed, "Search product successfully displayed");
        // do search product
        await locators.searchBar.addValue(value);
        const getText = await locators.searchBar.getValue();
        console.log(getText);
        chai.assert.equal(getText, constant.KEYWORDS_SEARCH, "Keywords not same");
        await locators.searchBtn.click();
        await locators.cardListProduct.waitForDisplayed();
        const verifyCardList = await locators.cardListProduct.isDisplayed();
        chai.assert.isTrue(verifyCardList, "Result is not True");
        console.log("Successfully Search Product with Keywords: " + value);
        await browser.pause(3000);
    }

    async applyFilters() {
        //verify more filter is available
        await locators.moreFiltersBtn.waitForDisplayed();
        if (locators.moreFiltersBtn.isDisplayed()) {
            await locators.seeDetailsFiltersShowOnly.scrollIntoView();
            await locators.moreFiltersBtn.click();
            console.log("Filters already displayed");
        } else {
            console.log("Filters not displayed");
        }
        //apply filters
        await locators.overlayFormFilters.waitForDisplayed();
        if(locators.overlayFormFilters.isDisplayed()) {
            //apply filters not specified
            await locators.screenSizeFilters.waitForClickable();
            await locators.screenSizeFilters.click();
            await browser.pause(3000);
            await locators.notSpecifiedFiltersScreenSize.waitForExist();
            await locators.notSpecifiedFiltersScreenSize.isClickable();
            await locators.notSpecifiedFiltersScreenSize.click();
            const verifyNotSpecified = await locators.notSpecifiedFiltersScreenSize.isSelected();
            chai.assert.isTrue(verifyNotSpecified,"Failed selected notSpecified Filter");
            console.log(verifyNotSpecified);
            //apply filters price
            await locators.priceFilters.waitForExist();
            await locators.priceFilters.scrollIntoView();
            await locators.priceFilters.isClickable();
            await locators.priceFilters.click();
            await browser.pause(3000);
            await locators.underFiltersPrice.waitForExist();
            await locators.underFiltersPrice.isClickable();
            await locators.underFiltersPrice.click();
            const verifyUnder = await locators.underFiltersPrice.isSelected();
            chai.assert.isTrue(verifyUnder, "Failed selected Under Filter");
            //apply filters item location 
            await locators.itemLocationFilters.waitForExist();
            await locators.itemLocationFilters.isClickable();
            await locators.itemLocationFilters.click();
            await browser.pause(3000);
            await locators.asiaFiltersItemLocation.waitForExist();
            await locators.asiaFiltersItemLocation.isClickable();
            await locators.asiaFiltersItemLocation.click();
            const verifyAsia = await locators.asiaFiltersItemLocation.isSelected();
            chai.assert.isTrue(verifyAsia, "Failed selected Asia Filter");
            const verifyTotalFilters = await locators.countTotalFiltersApplied.getText();
            chai.assert.equal(verifyTotalFilters, constant.TOTAL_COUNT_FILTERS, "Failed count total filters applied");
            await locators.applyBtnFilters.click();
            await browser.pause(3000);
            console.log("Successfully applied 3 Filters (Price, Item Location, Screen size)");
        } else {
            console.log("Failed Overlay Filters not Displayed");
        }
        await browser.pause(10000);
    }

    async verifyFilters(){
        await locators.containerFiltersApplied.waitForDisplayed();
        if (locators.containerFiltersApplied.isDisplayed()) {
            //verify results and filters applied
            chai.expect(constant.TEXT_FILTER_LOCATION).exist
            chai.expect(constant.TEXT_FILTER_UNDER).exist
            chai.expect(constant.TEXT_FILTER_SCREENSIZE).exist
            console.log("Success Filters applied");
            const totalResults = await locators.totalCountResultsAfterFiltersApplied.getText();
            chai.assert.isNotNull(totalResults);
            console.log(totalResults);
        } else{
            console.log("Failed Filters not Applied");
        }
    }

    async open(){
        return super.open();
    }

}
module.exports = new ScenePage1();