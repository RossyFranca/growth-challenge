import {Locator, Page} from '@playwright/test';

export class PlayBookPage{
    page:Page;
    edit_mod_btn:Locator;
    our_history_field:Locator;
    menu_our_history_field:Locator;

   constructor(page:Page){
    this.page = page;
    this.edit_mod_btn = page.getByTitle('Modo de edição');
    this.our_history_field = page.locator('p+h2[id^="31"]');
    this.menu_our_history_field = page.locator('//*[@id="__next"]/div/div/div/div[1]/div[2]/div[3]/div/div[1]/button/p');
   }

   async gotoPlayBook(){
    await this.page.goto("https://client.stg.growthstation.app/playbook");
    await this.page.waitForLoadState();
   }

}

