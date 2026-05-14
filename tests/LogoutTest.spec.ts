import {test,expect} from '../fixtures/baseFixture'


test("Logout Test @matser @regression",async({loggedInPage,dashboardPage,homePage})=>{

    expect(await dashboardPage.isDashBoardPageExists()).toBeTruthy();
    await homePage.clickMyAccount();
    await dashboardPage.logout();
    expect(await homePage.isHomePageExists()).toBeTruthy();

})