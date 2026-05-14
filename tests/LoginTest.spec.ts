import { expect, test } from '../fixtures/baseFixture';


test("Login with valid credentials @master @sanity @regression",async({loggedInPage,dashboardPage})=>{
    expect (await dashboardPage.isDashBoardPageExists()).toBeTruthy();

})
