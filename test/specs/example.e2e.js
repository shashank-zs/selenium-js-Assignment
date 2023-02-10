import { remote } from 'webdriverio'
//import MainPage from '../pageobjects/MainPage';
//import securePage from '../pageobjects/secure.page';

describe('hotel booking on make my trip', async() => {

    it('Google sign in', async() => {
        const browser = await remote({
            capabilities: {
                browserName: 'chrome'
            }
        })

        browser.url('https://www.makemytrip.com/');
        

// const date = new Date();
// console.log(date)
         // MainPage.closeAd.click();
const closeAd = await browser.$('//span[@class="ic_circularclose_grey"]')
await closeAd.click()

//const firstWindow = await browser.getWindowHandle
const logIn= await browser.$('//li[@data-cy="account"]')
await logIn.click()

// securePage.closeAdd.click();
// securePage.logggg.click();
const googleSignIn =await browser.$('.nsm7Bb-HzV7m-LgbsSe-Bz112c')
await googleSignIn.click()

const inputEmail =await browser.$("//input[@type='email']")
const SignInText =browser.$('.oO8pQe span')
SignInText.waitForDisplayed();
await inputEmail.setValue('shashank.purohit@zopsmart.com')

const nextButton =await browser.$("//*[contains(text(),'Next')]")
nextButton.waitForDisplayed();
await nextButton.click()


const inputPass =await browser.$('//input[@aria-label="Enter your password"]')
// browser.pause(3000);
await inputPass.click();
browser.pause(8000);
await inputPass.setValue('zopsmart@92146')
//assert.equal(inputPass.isDisplayed(), true, 'input pass is not displayed');
console.log("type password")


const nextButton2 =await browser.$('(//span[@class="VfPpkd-vQzf8d"])[2]')
//assert.equal(nextButton2.isDisplayed(),true,'next button not displayed')
nextButton2.waitForDisplayed();
await nextButton2.click()

browser.pause(8000);
const PhoneClose = await browser.$('.mybizLoginClose')
const framePhoneClose= await browser.$('//p[@data-cy="commonModal"]');

framePhoneClose.waitForDisplayed();
await PhoneClose.click()

const HotelClick =browser.$('//li[@data-cy="menu_Hotels"]');
HotelClick.click()

const city =browser.$('#city');
city.waitForDisplayed();
city.click();
city.setValue("banglore")

const allCityChoose = await browser.$("//*[contains(text(),'Bangalore, Karnataka, India')]");
allCityChoose.waitForDisplayed();
allCityChoose.click();

const checkIndateButton= await browser.$('#checkin')
checkIndateButton.click();

const checkIndate = await browser.$('//span[@data-cy="selectCheckInDate"]/span[1]')
checkIndate.waitForDisplayed();
checkIndate.click();
checkIndate.setValue("17")

const checkOutdateButton= await browser.$('#checkout')
checkOutdateButton.click();

const checkOutDate = await browser.$('//span[@data-cy="selectCheckOutDate"]/span[1]');
checkOutDate.waitForDisplayed();
checkOutDate.click();
checkOutDate.setValue("18");

const guest = await browser.$('#guest');
guest.click();

const children=await browser.$('//span[@data-testid="children_count"]');
children.click();

const childCount = await browser.$('//ul[@class="gstSlct__list"]/li[2]');
childCount.isDisplayed();
childCount.click();

const apply = await browser.$("//button[contains(text(),'Apply')]");
apply.isDisplayed();
apply.click();




    });
    
    
});