import{Page,expect,Locator} from '@playwright/test';

export class RegistrationPage{

    private readonly page:Page;
    //Locators
    private readonly firstNametxt : Locator;
    private readonly lastNametxt : Locator;
    private readonly emailtxt : Locator;
    private readonly phonetxt : Locator;
    private readonly passwordtxt : Locator;
    private readonly confirmPasswordtxt : Locator;
    private readonly subscribeRadio : Locator;
    private readonly policyCheckBox : Locator;
    private readonly continuebtn : Locator;
    private readonly confirmationMsg : Locator;

    //Constructor

    constructor(page:Page){
        this.page = page;
        this.firstNametxt = page.getByPlaceholder("First Name");
        this.lastNametxt = page.getByPlaceholder("Last Name");
        this.emailtxt = page.getByPlaceholder("E-Mail");
        this.phonetxt =page.getByPlaceholder("Telephone");
        this.passwordtxt =page.locator("#input-password");
        this.confirmPasswordtxt =page.locator("#input-confirm");
        this.subscribeRadio =page.getByText("No");
        this.policyCheckBox =page.locator("input[type='checkbox']");
        this.continuebtn =page.locator("input[value='Continue']");
        this.confirmationMsg = page.locator("div[id='content'] h1");


    }
    //Action Methods
   async setFirstName(fName:string):Promise<void>{
        await this.firstNametxt.fill(fName);
   }
   async setLastName(lName:string):Promise<void>{
        await this.lastNametxt.fill(lName);
   }
   async setEmail(email:string):Promise<void>{
        await this.emailtxt.fill(email);
   }
   async setPhone(phone:string):Promise<void>{
        await this.phonetxt.fill(phone);
   }
   async setPassword(password:string):Promise<void>{
        await this.passwordtxt.fill(password);
   }
   async setConfirmPassword(password:string):Promise<void>{
        await this.confirmPasswordtxt.fill(password);
   }
   async setPrivacyPolicy():Promise<void>{
        await this.policyCheckBox.check();
   }
   async clickContinue():Promise<void>{
    await this.continuebtn.click();
   }
   async getconfirmationMsg():Promise<string>{
    const msg  = await this.confirmationMsg.textContent();
    return msg ?? '';
   }

   async completeRegistrationForm(userData:{
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    password:string,
   }):Promise<string>{
    await this.setFirstName(userData.firstName);
    await this.setLastName(userData.lastName);
    await this.setEmail(userData.email);
    await this.setPhone(userData.phone);
    await this.setPassword(userData.password);
    await this.setConfirmPassword(userData.password);
    await this.setPrivacyPolicy();
    await this.clickContinue();
    const msg = await this.getconfirmationMsg();
    return msg ?? '';

   }

}