class Locator {
  get searchBar() {
    return $("//input[@id='gh-ac']");
  }
  get searchBtn() {
    return $("//input[@id='gh-btn']");
  }
  get categoryBtn() {
    return $("//select[@id='gh-cat']");
  }
  get selectCategoryBtn() {
    return $("#gh-cat");
  }
  get moreFiltersBtn() {
    return $("//button[contains(text(),'More filters...')]");
  }
  get cardListProduct() {
    return $("//div[@id='srp-river-results']/ul/li");
  }
  get seeDetailsFiltersShowOnly() {
    return $("//div[@id='x-refine__group__8']");
  }
  get overlayFormFilters() {
    return $("//form[@id='x-overlay__form']");
  }
  get screenSizeFilters() {
    return $("//div[contains(@class, 'x-overlay-aspect')][7]");
  }
  get priceFilters() {
    return $("//div[contains(@class, 'x-overlay-aspect')][18]");
  }
  get itemLocationFilters() {
    return $("//div[contains(@class, 'x-overlay-aspect')][20]");
  }
  get notSpecifiedFiltersScreenSize() {
    return $("//fieldset[@class='x-overlay-sub-panel__aspect-fieldset']/div[2]/div[2]//input[@class='checkbox__control']");
  }
  get underFiltersPrice() {
    return $("//fieldset[@class='x-overlay-sub-panel__aspect-fieldset']//li[1]//input[@class='checkbox__control']");
  }
  get asiaFiltersItemLocation() {
    return $("//fieldset[@class='x-overlay-sub-panel__aspect-fieldset']/div[5]//input[@name='location']");
  }
  get applyBtnFilters() {
    return $("//button[@class='x-overlay-footer__apply-btn btn btn--primary']");
  }
  get countTotalFiltersApplied() {
    return $("//span[@class='x-tray__count']")
  }
  get containerFiltersApplied() {
    return $("//div[@class='carousel__viewport']/ul[@class='carousel__list']");
  }
  get totalCountResultsAfterFiltersApplied() {
    return $("//h1[@class='srp-controls__count-heading']");
  }
  get computerTabletsCategory(){
    return $("//span[.='Computers/Tablets & Networking']");
  }
  get firstResultCardListProduct() {
    return $("(//div[@class='s-item__title'])[2]");
  }
}
module.exports = new Locator();
