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
        await page.waitForURL('**/materials')

        expect(page.url()).toBe('https://client.stg.growthstation.app/materials');
    });

    test('logout', async ({page})=>{
        await page.getByPlaceholder('E-mail').fill('usuariodaempresa3333@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.123');
        await page.getByRole('button', { name: 'Entrar' }).click();

        await page.getByTitle('Usuario').click();
        await page.locator('[href="/logout"]').click();
        await page.waitForURL('**/login')

        expect(page.url()).toBe('https://client.stg.growthstation.app/login');

    });


});