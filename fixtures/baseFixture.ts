import {test as base, expect, Page} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { DashboardPage } from '../pages/DashboardPage';
import {SearchPage} from '../pages/SearchPage';

type MyFixtures = {
    loginPage : LoginPage;
    homePage : HomePage;
    loggedInPage : Page;
    dashboardPage : DashboardPage;
    searchPage:SearchPage;
};

export const test = base.extend<MyFixtures>({
    //Page Objects
    loginPage : async({page},use)=>{
        await use(new LoginPage(page));
    },

    homePage : async({page},use)=>{
        await use(new HomePage(page));
    },

    dashboardPage : async({page},use)=>{
        await use(new DashboardPage(page));
    },
    searchPage : async({page},use)=>{

        await use(new SearchPage(page));
    },

    loggedInPage : async({page, loginPage, homePage},use)=>{
       const testConfig = new TestConfig();
       await loginPage.goto(testConfig.appUrl);
       expect(await homePage.isHomePageExists()).toBeTruthy();
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        await loginPage.login(testConfig.email,testConfig.password);
        await use(page);
    }
})

export {expect};
