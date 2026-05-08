import {expect,test} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { TestConfig } from '../test.config'

let config : TestConfig;
let homePage : HomePage;
let loginPage : LoginPage;
let dashboardPage : DashboardPage;

test.beforeEach(async({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
})

test.afterEach(async({page})=>{
    await page.close();
})


test("Logout Test @matser @regression",async()=>{

    expect(await homePage.isHomePageExists()).toBeTruthy();
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    await loginPage.login(config.email,config.password);
    expect(await dashboardPage.isDashBoardPageExists()).toBeTruthy();
    await homePage.clickMyAccount();
    await dashboardPage.logout();
    await homePage.isHomePageExists();

})