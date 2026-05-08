import{Page,expect,Locator} from '@playwright/test'

export class LoginPage{

    //locator
    private readonly page: Page;
    private readonly emailtxt : Locator;
    private readonly passwordtxt : Locator;
    private readonly loginBtn : Locator;
    private readonly errorMsg : Locator;

    //constructor

    constructor(page:Page){
        this.page = page;
        this.emailtxt = page.getByPlaceholder("E-Mail Address");
        this.passwordtxt = page.getByPlaceholder("Password");
        this.loginBtn = page.locator("input[value='Login']");
        this.errorMsg = page.locator(".alert.alert-danger.alert-dismissible");
    }
    //Action methods

    async login(email:string,passwordValue : string){
        await this.emailtxt.fill(email);
        await this.passwordtxt.fill(passwordValue);
        await this.loginBtn.click();
    }

    async loginErrorMsg(){
        return await this.errorMsg.textContent();
    }
}