const assert = require('assert')


const enterprisePage = require('../page/enterprise.page.js')


describe('Should check exists some textes, check visibility and clickability of elements (Final homework2)', async () => {
    
    it('Go to website github.com', async () => {
        await browser.url('https://github.com/');
        await browser.maximizeWindow();
        await browser.pause(100)
        })

    it('Should click on SignUp, and set fake credentials, and check to exist expected text', async () => {
        await enterprisePage.toSolutions();
        await browser.pause(100)

        await enterprisePage.exploreStories();
        await browser.pause(100)

        await enterprisePage.viewAllSolutions()
        await browser.pause(100)

        await enterprisePage.clickSolutions()
        await browser.pause(100)

        await enterprisePage.clickSoTrial();
        await browser.pause(100)
        
        await enterprisePage.pickYourTrial()
        await browser.pause(100)

        await enterprisePage.clickOnEnterprise()
        await browser.pause(100)

        })
    }
)
