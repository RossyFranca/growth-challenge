import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';


test.describe('Login Tests', ()=>{

    test.beforeEach(async ({page})=>{
        const loginpage = new LoginPage(page);
        await loginpage.gotoLoginPage();
    });

    test('login with success @smoke', async({page})=>{
     
        await page.getByPlaceholder('E-mail').fill('usuariodaempresa3333@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.123');
        await page.getByRole('button', { name: 'Entrar' }).click();


    });


});