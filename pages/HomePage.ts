import {Page, expect, Locator} from '@playwright/test';

export class HomePage{

    private readonly page:Page;
    // Locators
    private readonly myAccountLink :Locator;
    private readonly registerLink : Locator;
    private readonly loginLink : Locator;
    private readonly searchBartxt : Locator;
    private readonly searchbtn : Locator;

    // Constructor

    constructor(page:Page){
        this.page = page;
        this.myAccountLink = page.getByTitle("My Account");
        this.registerLink = page.getByRole("link",{name:'Register'});
        this.loginLink = page.getByRole("link",{name:'Login'}).first();
        this.searchBartxt = page.getByPlaceholder("Search");
        this.searchbtn = page.locator("button[class='btn btn-default btn-lg']");
    }
    // Action method

    async isHomePageExists(){
        let title:String = await this.page.title();
        if(title){
            return true;
        }
        return false;
    }

    async clickMyAccount(){
        try{
            await this.myAccountLink.click();
        }catch(error){
            console.log(`Exception occured while entering product name: ${error}`);
            throw error;
        }
    }

    async clickRegister(){
        try{
            await this.registerLink.click();
        }catch(error){
            console.log(`Exception occured while entering product name: ${error}`);
            throw error;
        }
    }

    async clickLogin(){
        try{
            await this.loginLink.click();
        }catch(error){
            console.log(`Exception occured while entering product name: ${error}`);
            throw error;
        }
    }

    async clickSearch(){
        try{
            await this.searchbtn.click();
        }catch(error){
            console.log(`Exception occured while clicking search : ${error}`);
            throw error;
        }
    }
}