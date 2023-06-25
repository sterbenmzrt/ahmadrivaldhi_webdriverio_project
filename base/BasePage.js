module.exports =  class BasePage {
    async open () {
        return browser.url(`https://ebay.com`);
    }
}