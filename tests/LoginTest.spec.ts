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

test("Login with valid credentials @master @sanity @regression",async()=>{
    expect(await homePage.isHomePageExists()).toBeTruthy();
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    await loginPage.login(config.email,config.password);
    expect (await dashboardPage.isDashBoardPageExists()).toBeTruthy();

})
