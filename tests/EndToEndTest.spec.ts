/*
1. Register New User
2. Logout
3. Login with new user
4. search product and add to cart
5. Checkout
*/

import{test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { TestConfig } from '../test.config'
import {RegistrationPage} from '../pages/RegistrationPage'
import {RandomDataUtil} from '../utils/randomDataGenerator'
import { SearchPage } from '../pages/SearchPage'
import { CartPage } from '../pages/CartPage'

let config : TestConfig;
let homePage : HomePage;
let loginPage : LoginPage;
let dashboardPage : DashboardPage;
let registrationPage : RegistrationPage;
let searchPage : SearchPage;
let cartPage : CartPage;


test.beforeEach(async({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    registrationPage = new RegistrationPage(page);
    searchPage = new  SearchPage(page);
    cartPage = new CartPage(page);
    
})

test("End to End Test @end-to-end",async()=>{

    // Account Registration
    expect(await homePage.isHomePageExists()).toBeTruthy();
    await homePage.clickMyAccount();
    await homePage.clickRegister();
    const email = RandomDataUtil.getEmail();
    const password = RandomDataUtil.getPassword();
    const message = await registrationPage.completeRegistrationForm({
        firstName : RandomDataUtil.getFirstName(),
        lastName : RandomDataUtil.getLastName(),
        email : email,
        phone: RandomDataUtil.getPhone(),
        password:password,
    });
    expect(await message).toBe("Your Account Has Been Created!");

    // Logout
    await homePage.clickMyAccount();
    await dashboardPage.logout();
    expect(await homePage.isHomePageExists()).toBeTruthy();

    //Login
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    await loginPage.login(email,password);
    expect(await dashboardPage.isDashBoardPageExists()).toBeTruthy();

    //search product
    //expect(await searchPage.isSearchPageExists()).toBeTruthy();
    await searchPage.searchProduct(config.productName);
    expect(await searchPage.isProductDisplayed()).toBeTruthy();
    await searchPage.clickAddToCart();
    await cartPage.isShoppingCartPageDisplayed();
    await cartPage.clickCheckout();




})