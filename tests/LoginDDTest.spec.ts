import {expect,test} from '../fixtures/baseFixture.ts'
import {DataProvider} from '../utils/dataProvider.ts'
 import {TestConfig} from '../test.config.ts'


const JSONPath = 'testData/loginData.json';
const testData = DataProvider.getTestDataFromJson(JSONPath);

for (const data of testData){
    test(`Login with JSON data : ${data.testName} @datadriven`,async({page,homePage,dashboardPage,loginPage})=>{
        const config = new TestConfig();
        await page.goto(config.appUrl);
        expect(await homePage.isHomePageExists()).toBeTruthy();
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        await loginPage.login(data.email,data.password);

        if(data.expected.toLowerCase() == 'success'){
            expect (await dashboardPage.isDashBoardPageExists()).toBeTruthy();
        }else{
            const errormsg =await  loginPage.loginErrorMsg();
            expect(errormsg).toBe('Warning: No match for E-Mail Address and/or Password.');
        }

    })
}