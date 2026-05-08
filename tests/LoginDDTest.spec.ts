import {expect,test} from '@playwright/test'
import {HomePage} from '../pages/HomePage.ts'
import {LoginPage} from '../pages/LoginPage.ts'
import {DashboardPage} from '../pages/DashboardPage.ts'
import {DataProvider} from '../utils/dataProvider.ts'
import {TestConfig} from '../test.config.ts'


const JSONPath = 'testData/loginData.json';
const testData = DataProvider.getTestDataFromJson(JSONPath);

for (const data of testData){
    test(`Login with JSON data : ${data.testName} @datadriven`,async({page})=>{
        const config = new TestConfig();
        await page.goto(config.appUrl);
        const homePage = new HomePage(page);
        expect(await homePage.isHomePageExists()).toBeTruthy();
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        const loginPage = new LoginPage(page);
        await loginPage.login(data.email,data.password);

        if(data.expected.toLowerCase() == 'success'){
            const dashboardPage = new DashboardPage(page);
            expect (await dashboardPage.isDashBoardPageExists()).toBeTruthy();
        }else{
            const errormsg =await  loginPage.loginErrorMsg();
            expect(errormsg).toBe('Warning: No match for E-Mail Address and/or Password.');
        }

    })
}