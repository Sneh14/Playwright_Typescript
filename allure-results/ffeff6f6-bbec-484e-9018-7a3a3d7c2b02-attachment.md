# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration
- Location: tests\AccountRegistration.spec.ts:7:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('h1[text=\'Your Account Has Been Created!\']')

```

# Test source

```ts
  1  | import{Page,expect,Locator} from '@playwright/test';
  2  | 
  3  | export class RegistrationPage{
  4  | 
  5  |     private readonly page:Page;
  6  |     //Locators
  7  |     private readonly firstNametxt : Locator;
  8  |     private readonly lastNametxt : Locator;
  9  |     private readonly emailtxt : Locator;
  10 |     private readonly phonetxt : Locator;
  11 |     private readonly passwordtxt : Locator;
  12 |     private readonly confirmPasswordtxt : Locator;
  13 |     private readonly subscribeRadio : Locator;
  14 |     private readonly policyCheckBox : Locator;
  15 |     private readonly continuebtn : Locator;
  16 |     private readonly confirmationMsg : Locator;
  17 | 
  18 |     //Constructor
  19 | 
  20 |     constructor(page:Page){
  21 |         this.page = page;
  22 |         this.firstNametxt = page.getByPlaceholder("First Name");
  23 |         this.lastNametxt = page.getByPlaceholder("Last Name");
  24 |         this.emailtxt = page.getByPlaceholder("E-Mail");
  25 |         this.phonetxt =page.getByPlaceholder("Telephone");
  26 |         this.passwordtxt =page.locator("#input-password");
  27 |         this.confirmPasswordtxt =page.locator("#input-confirm");
  28 |         this.subscribeRadio =page.getByText("No");
  29 |         this.policyCheckBox =page.locator("input[type='checkbox']");
  30 |         this.continuebtn =page.locator("input[value='Continue']");
  31 |         this.confirmationMsg = page.locator("h1[text='Your Account Has Been Created!']");
  32 | 
  33 | 
  34 |     }
  35 |     //Action Methods
  36 |    async setFirstName(fName:string):Promise<void>{
  37 |         await this.firstNametxt.fill(fName);
  38 |    }
  39 |    async setLastName(lName:string):Promise<void>{
  40 |         await this.lastNametxt.fill(lName);
  41 |    }
  42 |    async setEmail(email:string):Promise<void>{
  43 |         await this.emailtxt.fill(email);
  44 |    }
  45 |    async setPhone(phone:string):Promise<void>{
  46 |         await this.phonetxt.fill(phone);
  47 |    }
  48 |    async setPassword(password:string):Promise<void>{
  49 |         await this.passwordtxt.fill(password);
  50 |    }
  51 |    async setConfirmPassword(password:string):Promise<void>{
  52 |         await this.confirmPasswordtxt.fill(password);
  53 |    }
  54 |    async setPrivacyPolicy():Promise<void>{
  55 |         await this.policyCheckBox.check();
  56 |    }
  57 |    async clickContinue():Promise<void>{
  58 |     await this.continuebtn.click();
  59 |    }
  60 |    async getconfirmationMsg():Promise<string>{
> 61 |     const msg  = await this.confirmationMsg.textContent();
     |                                             ^ Error: locator.textContent: Target page, context or browser has been closed
  62 |     return msg ?? '';
  63 |    }
  64 | 
  65 |    async completeRegistrationForm(userData:{
  66 |     firstName:string,
  67 |     lastName:string,
  68 |     email:string,
  69 |     phone:string,
  70 |     password:string,
  71 |    }):Promise<string>{
  72 |     await this.setFirstName(userData.firstName);
  73 |     await this.setLastName(userData.lastName);
  74 |     await this.setEmail(userData.email);
  75 |     await this.setPhone(userData.phone);
  76 |     await this.setPassword(userData.password);
  77 |     await this.setConfirmPassword(userData.password);
  78 |     await this.setPrivacyPolicy();
  79 |     await this.clickContinue();
  80 |     const msg = await this.getconfirmationMsg();
  81 |     return msg ?? '';
  82 | 
  83 |    }
  84 | 
  85 | }
```