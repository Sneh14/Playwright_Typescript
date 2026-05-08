import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TestConfig} from '../test.config'

let homePage: HomePage;
let registrationPage: RegistrationPage;
let loginPage : LoginPage;
let config : TestConfig;
let dashboardPage : DashboardPage;

test.beforeEach(async ({ page }) => {
    //Launch URL
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

})

test.afterEach(async ({ page }) => {
    await page.close();

})

test('Account Registration @sanity', async () => {

    //Goto my account and click register
    expect(await homePage.isHomePageExists()).toBeTruthy();
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //Fill register form
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setPhone(RandomDataUtil.getPhone());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);
    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();
    expect(await registrationPage.getconfirmationMsg()).toBe("Your Account Has Been Created!");

})


