import{test,expect} from '../fixtures/baseFixture'

test("Search non existing product",async({loggedInPage,searchPage,dashboardPage})=>{

    expect(await dashboardPage.isDashBoardPageExists()).toBeTruthy();
    await searchPage.searchProduct("moto");
    expect(await searchPage.noProductFoundMsg()).toBeTruthy();
})

test.only("Blank Search",async({loggedInPage,searchPage,dashboardPage})=>{

    expect(await dashboardPage.isDashBoardPageExists()).toBeTruthy();
    await searchPage.clicksearchBtn();
    expect(await searchPage.noProductFoundMsg()).toBeTruthy();
})