# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LogoutTest.spec.ts >> Logout Test @matser @regression
- Location: tests\LogoutTest.spec.ts:25:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Logout' }) resolved to 2 elements:
    1) <a href="https://tutorialsninja.com/demo/index.php?route=account/logout">Logout</a> aka locator('#top-links').getByRole('link', { name: 'Logout' })
    2) <a class="list-group-item" href="https://tutorialsninja.com/demo/index.php?route=account/logout">Logout</a> aka locator('#column-right').getByRole('link', { name: 'Logout' })

Call log:
  - waiting for getByRole('link', { name: 'Logout' })

```

# Test source

```ts
  1  | import {Locator,Page,expect} from '@playwright/test'
  2  | 
  3  | export class DashboardPage{
  4  |     private readonly page:Page;
  5  |     //locator
  6  |     private readonly myOrders : Locator;
  7  |     private readonly logoutLink : Locator;
  8  |     //constructor
  9  |     constructor(page:Page){
  10 |         this.page = page;
  11 |         this.myOrders = page.getByText("My Orders");
  12 |         this.logoutLink = page.getByRole("link",{name:'Logout'});
  13 |     }
  14 |     //action methods
  15 | 
  16 |     async isDashBoardPageExists(){
  17 |         return await this.myOrders.isVisible();
  18 |     }
  19 | 
  20 |     async logout(){
> 21 |         await this.logoutLink.click();
     |                               ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Logout' }) resolved to 2 elements:
  22 |     }
  23 | 
  24 | }
```