class enterprisePage {
    
        get scroll() {return $('.lp-CustomerStories-logoContainer')}
        get explore() {return $('//*[text()="Explore customer stories"]')}
        get solutions() {return $('a[href="/solutions"]')}
        get viewAll() {return $('/html/body/div[1]/div[6]/main/react-app/div/div/div/section[5]/div[2]/div/div[2]/div[2]/a')}
        get startFreeTrial() {return $("a[href='https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fsolutions_overview']")}
        get trialPlan() {return $("//*[text()='Pick your trial plan']")}
        get enterpriseCloud() {return $("a[href='/enterprise/trial/start?ref_cta=Enterprise+Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan%3Fref_cta%3DStart%2Ba%2Bfree%2Btrial%26ref_loc%3Dhero%26ref_page%3D%252Fsolutions_overview']")}
                
             async toSolutions () {
                await this.scroll.scrollIntoView()
             }

             async exploreStories() {
                console.log("Does explore exist?: " + await this.explore.isExisting());
         
             }
             async viewAllSolutions() {
                console.log("Does All Solutions displayed? " + await this.solutions.isDisplayed({ withinViewport: true }));   
             }

             async clickSolutions() {
                await this.viewAll.click();     
            }
                
             async clickSoTrial() {
                await this.startFreeTrial.click();     
            }   

            async pickYourTrial() {
                console.log("Does Trial plan exist? " + await this.trialPlan.isExisting());
            }

            async clickOnEnterprise() {
                await this.enterpriseCloud.click();
            }
        
    }


module.exports = new enterprisePage()