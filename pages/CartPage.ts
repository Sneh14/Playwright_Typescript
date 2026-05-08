import{Page,expect,Locator} from '@playwright/test'

export class CartPage{

    private readonly page : Page;
    //Locator
    private readonly shoppingCart :Locator;
    private readonly checkoutLink : Locator;

    //Constructor

    constructor(page:Page){
        this.page = page;
        this.shoppingCart = page.getByRole("link",{name:'Shopping Cart'});
        this.checkoutLink = page.getByRole("link",{name:'Checkout'});

    }
    //Action Methods

    async isShoppingCartPageDisplayed(){
        return await this.shoppingCart.isVisible();
    }

    async clickCheckout(){
        await this.checkoutLink.click();
    }
}