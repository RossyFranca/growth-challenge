import {Locator, Page} from '@playwright/test';

export class PlayBookPage{
    page:Page;
    edit_btn:Locator;

   constructor(page:Page){
    this.page = page;
    this.edit_btn = page.getByTitle('Modo de edição');
   }


   async gotoPlayBook(){
    await this.page.goto("https://client.stg.growthstation.app/playbook");
    await this.page.waitForLoadState();
   }
}

