import {Locator,Page,expect} from '@playwright/test'

export class DashboardPage{
    private readonly page:Page;
    //locator
    private readonly myOrders : Locator;
    private readonly logoutLink : Locator;
    //constructor
    constructor(page:Page){
        this.page = page;
        this.myOrders = page.getByText("My Orders");
        this.logoutLink = page.getByRole("link",{name:'Logout'}).first();
    }
    //action methods

    async isDashBoardPageExists(){
        return await this.myOrders.isVisible();
    }

    async logout(){
        await this.logoutLink.click();
    }

}