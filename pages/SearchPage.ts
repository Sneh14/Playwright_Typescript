import {Page, expect,Locator} from '@playwright/test'

export class SearchPage{

    private readonly page:Page;
    //Locators
    private readonly searchBar : Locator;
    private readonly searchBtn : Locator;
    private readonly searchCriteria : Locator;
    private readonly productThumb :Locator;
    private readonly addToCart: Locator;
    private readonly cartTotal : Locator;
    private readonly viewCart : Locator;
    private readonly noProductFound: Locator;

    //Constructor

    constructor(page:Page){
        this.page = page;
        this.searchBar = page.locator("input[placeholder='Search']");
        this.searchBtn = page.locator("i[class='fa fa-search']");
        this.searchCriteria = page.getByText("Search Criteria");
        this.productThumb = page.locator("div[class='product-thumb']");
        this.addToCart = page.getByText("Add to Cart");
        this.cartTotal = page.getByTestId("cart-total");
        this.viewCart = page.getByRole("link",{name:'View Cart'});
        this.noProductFound = page.getByText('There is no product that matches the search criteria.');

        

    }
    //ACtion Methods
    async isSearchPageExists(){
        return await this.searchCriteria.isVisible();
    }

    async clicksearchBtn(){
        await this.searchBtn.click();

    }
    async searchProduct(productName:string){
        await this.searchBar.fill(productName);
        this.clicksearchBtn();
    }

    async isProductDisplayed(){
        return await this.productThumb.isVisible();
    }
 
    async clickAddToCart(){
        await this.addToCart.click();
    }
    
    async clickCartTotal(){
        await this.cartTotal.click();
    }

    async clickViewCart(){
        await this.viewCart.click();
    }

    async noProductFoundMsg(){
        return await this.noProductFound.isVisible();
    }
}