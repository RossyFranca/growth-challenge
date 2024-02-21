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

        expect(await page.title()).toBe('materiais - Growth Station');
        expect(page.url()).toBe('https://client.stg.growthstation.app/materials');
    });

    test.only('logout', async ({page})=>{
        await page.getByPlaceholder('E-mail').fill('usuariodaempresa3333@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.123');
        await page.getByRole('button', { name: 'Entrar' }).click();

        

        await page.getByTitle('Usuario').click();
        await page.locator('[href="/logout"]').click();

        expect(page.url()).toBe('https://client.stg.growthstation.app/login');

    });


});