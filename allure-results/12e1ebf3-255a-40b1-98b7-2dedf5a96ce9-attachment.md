# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Login with valid credentials
- Location: tests\AccountRegistration.spec.ts:52:6

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { RegistrationPage } from '../pages/RegistrationPage'
  4  | import { RandomDataUtil } from '../utils/randomDataGenerator'
  5  | import { LoginPage } from '../pages/LoginPage';
  6  | import { DashboardPage } from '../pages/DashboardPage';
  7  | import { TestConfig} from '../test.config'
  8  | 
  9  | let homePage: HomePage;
  10 | let registrationPage: RegistrationPage;
  11 | let loginPage : LoginPage;
  12 | let config : TestConfig;
  13 | let dashboardPage : DashboardPage;
  14 | 
  15 | test.beforeEach(async ({ page }) => {
  16 |     //Launch URL
  17 |     config = new TestConfig();
  18 |     await page.goto(config.appUrl);
  19 |     homePage = new HomePage(page);
  20 |     registrationPage = new RegistrationPage(page);
  21 |     loginPage = new LoginPage(page);
  22 |     dashboardPage = new DashboardPage(page);
  23 | 
  24 | })
  25 | 
  26 | test.afterEach(async ({ page }) => {
  27 |     await page.close();
  28 | 
  29 | })
  30 | 
  31 | test('Account Registration', async () => {
  32 | 
  33 |     //Goto my account and click register
  34 |     expect(await homePage.isHomePageExists()).toBeTruthy();
  35 |     await homePage.clickMyAccount();
  36 |     await homePage.clickRegister();
  37 | 
  38 |     //Fill register form
  39 |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  40 |     await registrationPage.setLastName(RandomDataUtil.getLastName());
  41 |     await registrationPage.setEmail(RandomDataUtil.getEmail());
  42 |     await registrationPage.setPhone(RandomDataUtil.getPhone());
  43 |     const password = RandomDataUtil.getPassword();
  44 |     await registrationPage.setPassword(password);
  45 |     await registrationPage.setConfirmPassword(password);
  46 |     await registrationPage.setPrivacyPolicy();
  47 |     await registrationPage.clickContinue();
  48 |     expect(await registrationPage.getconfirmationMsg()).toBe("Your Account Has Been Created!");
  49 | 
  50 | })
  51 | 
  52 | test.only("Login with valid credentials",async()=>{
  53 |     expect(await homePage.isHomePageExists()).toBeTruthy();
  54 |     await homePage.clickMyAccount();
  55 |     await homePage.clickLogin();
  56 |     await loginPage.login(config.email,config.password);
> 57 |     expect (await dashboardPage.isDashBoardPageExists()).toBeTruthy();
     |                                                          ^ Error: expect(received).toBeTruthy()
  58 | 
  59 | })
  60 | 
```