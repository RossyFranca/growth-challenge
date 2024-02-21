import {Locator, Page} from '@playwright/test';
export class MaterialsPage {
    page:Page;
    user_menu:Locator;
    logout_btn:Locator;

    constructor(page:Page){
        this.page = page;

        this.user_menu = page.getByTitle('Usuario');
        this.logout_btn = page.locator('[href="/logout"]');
    }


}