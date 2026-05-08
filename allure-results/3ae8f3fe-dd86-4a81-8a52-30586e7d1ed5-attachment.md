# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration
- Location: tests\AccountRegistration.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h1[text=\'Your Account Has Been Created!\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Success" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/success
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=e76]
        - paragraph [ref=e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=e81] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=e83] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - complementary [ref=e84]:
        - generic [ref=e85]:
          - link "My Account" [ref=e86] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Edit Account" [ref=e87] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - link "Password" [ref=e88] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - link "Address Book" [ref=e89] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e90] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e91] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e92] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e93] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e94] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e95] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e96] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e97] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
          - link "Logout" [ref=e98] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Information" [level=5] [ref=e103]
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "About Us" [ref=e106] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e107]:
              - link "Delivery Information" [ref=e108] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e109]:
              - link "Privacy Policy" [ref=e110] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e111]:
              - link "Terms & Conditions" [ref=e112] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e113]:
          - heading "Customer Service" [level=5] [ref=e114]
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Contact Us" [ref=e117] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e118]:
              - link "Returns" [ref=e119] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e120]:
              - link "Site Map" [ref=e121] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e122]:
          - heading "Extras" [level=5] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Brands" [ref=e126] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e127]:
              - link "Gift Certificates" [ref=e128] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e129]:
              - link "Affiliate" [ref=e130] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e131]:
              - link "Specials" [ref=e132] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e133]:
          - heading "My Account" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "My Account" [ref=e137] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e138]:
              - link "Order History" [ref=e139] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e140]:
              - link "Wish List" [ref=e141] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e142]:
              - link "Newsletter" [ref=e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e144]
      - paragraph [ref=e145]:
        - text: Powered By
        - link "OpenCart" [ref=e146] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
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
     |                                             ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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