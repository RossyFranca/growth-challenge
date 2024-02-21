import {Page} from '@playwright/test';

export class LoginPage {
    page:Page;



    constructor(page:Page){
        this.page = page;
    }

    async gotoLoginPage(){
        await this.page.goto('https://client.stg.growthstation.app/login');
    }

}
