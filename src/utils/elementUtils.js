class elementUtils{

    async click(element){
        await element.waitForDisplayed();
        await element.click();
    }

    async setValue(element,value){
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    async getText(element){
        await element.waitForDisplayed();
        return element.getText();
    }

    async getValue(element){
        await element.waitForDisplayed();
        return element.getValue();
    }

    async isDisplayed(element){
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    async isEnabled(element){
        element.waitForEnabled();
        return element.isEnabled();
    }

    async waitForClickable(element){
        return element.waitForClickable({reverse:true});
    }

    async selectByVisibleText(element){
        await element.waitForDisplayed();
        await element.selectByVisibleText(element);
    } 

    async moveToElement(element){
        await element.waitForDisplayed();
        await element.moveTo(element);
    }
}
module.exports = new elementUtils();