import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';


test.describe('Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.gotoLoginPage();
    });

    test('login with success @smoke', async ({ page }) => {

        await page.getByPlaceholder('E-mail').fill('usuariodaempresa3333@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.123');
        await page.getByRole('button', { name: 'Entrar' }).click();
        await page.waitForURL('**/materials')

        expect(page.url()).toBe('https://client.stg.growthstation.app/materials');
    });

    test('logout', async ({ page }) => {
        await page.getByPlaceholder('E-mail').fill('usuariodaempresa3333@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.123');
        await page.getByRole('button', { name: 'Entrar' }).click();

        await page.getByTitle('Usuario').click();
        await page.locator('[href="/logout"]').click();
        await page.waitForURL('**/login')

        expect(page.url()).toBe('https://client.stg.growthstation.app/login');

    });
    test('wrong password', async ({ page }) => {

        await page.getByPlaceholder('E-mail').fill('usuariodaempresa3333@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.ERRADA');
        await page.getByRole('button', { name: 'Entrar' }).click();

        const message_error = await page.$eval('.text-left.font-medium.text-xs.text-red-500.w-full', (element) => element.textContent);

        expect(message_error).toBe("*E-mail ou senha inválidos");
    });

    test('wrong user', async ({ page }) => {

        await page.getByPlaceholder('E-mail').fill('invalid_user@gmail.com');
        await page.getByPlaceholder('Senha').fill('Senha.123');
        await page.getByRole('button', { name: 'Entrar' }).click();

        const message_error = await page.$eval('.text-left.font-medium.text-xs.text-red-500.w-full', (element) => element.textContent);

        expect(message_error).toBe("*E-mail ou senha inválidos");
    });

    test('empty fields', async ({page})=>{

       
        await page.getByRole('button', { name: 'Entrar' }).click();

        const message_error = await page.$eval('.text-left.font-medium.text-xs.text-red-500.w-full', (element) => element.textContent);

        expect(message_error).toBe("*E-mail ou senha inválidos");
    });

    test('is not a client @smoke', async ({ page }) => {

       
        const numeroDeAbasAntesDoClique = (await page.context().pages()).length;
        await page.getByText("Não é cliente?").click();
 
    
        const numeroDeAbasAposOClique = (await page.context().pages()).length;
        expect(numeroDeAbasAposOClique).toBe(numeroDeAbasAntesDoClique + 1);
    
        const novasAbas = page.context().pages();
        const novaAba = novasAbas[numeroDeAbasAntesDoClique];
        
        await novaAba.waitForLoadState();
    
        expect(novaAba.url()).toBe('https://www.growthmachine.com.br/');
    });

    test('forgot password', async ({page})=>{

        await page.locator('[href="/forgotPass"]').click();
        await page.waitForLoadState();

        expect(page.url()).toBe('https://client.stg.growthstation.app/forgotPass')

    });


});