import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { MaterialsPage } from '../pages/materialspage';

var loginPage:LoginPage;
var materialsPage:MaterialsPage;

/**
 * Para o Login, os testes devem cobrir diferentes cenários, incluindo mas
    não se limitando a: sucesso no login, falhas de autenticação
    (credenciais incorretas), campos obrigatórios vazios e restrições de
    formato para o campo de e-mail.
 */
test.describe('Login scenarios', () => {
   
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
    });

    test('login with success @smoke', async ({ page }) => {

        await loginPage.username_textbox.fill('usuariodaempresa3333@gmail.com');
        await loginPage.password_textbox.fill('Senha.123');
        await loginPage.login_submit_btn.click();
        await loginPage.page.waitForURL('**/materials')

        expect(loginPage.page.url()).toBe('https://client.stg.growthstation.app/materials');
    });

    test('logout', async ({ page }) => {
        await loginPage.username_textbox.fill('usuariodaempresa3333@gmail.com');
        await loginPage.password_textbox.fill('Senha.123');
        await loginPage.login_submit_btn.click();
        await loginPage.page.waitForURL('**/materials')
        
        materialsPage = new MaterialsPage(page);
        await materialsPage.user_menu.click();
        await materialsPage.logout_btn.click();
        await materialsPage.page.waitForURL('**/login')

        expect(loginPage.page.url()).toBe('https://client.stg.growthstation.app/login');

    });
    test('wrong password', async ({ page }) => {

        await loginPage.username_textbox.fill('usuariodaempresa3333@gmail.com');
        await loginPage.password_textbox.fill('Senha.ERRADA');
        await loginPage.login_submit_btn.click();

        //const message_error = await page.$eval('.text-left.font-medium.text-xs.text-red-500.w-full', (element) => element.textContent);
        const message_error = await page.locator('.text-left.font-medium.text-xs.text-red-500.w-full').textContent();
        expect(message_error).toBe('*E-mail ou senha inválidos');
    });

    test('wrong user', async ({ page }) => {

        await loginPage.username_textbox.fill('invalid_user@gmail.com');
        await loginPage.password_textbox.fill('Senha.123');
        await loginPage.login_submit_btn.click();
        await loginPage.page.waitForLoadState()

        //const message_error = await page.$eval('.text-left.font-medium.text-xs.text-red-500.w-full', (element) => element.textContent);
        const message_error = await page.locator('.text-left.font-medium.text-xs.text-red-500.w-full').textContent();

        expect(message_error).toBe('*E-mail ou senha inválidos');
    });

    test('empty fields', async ({page})=>{

       
        await loginPage.login_submit_btn.click();

        const message_error = await page.locator('.text-left.font-medium.text-xs.text-red-500.w-full').textContent();
        await loginPage.page.waitForLoadState()
        expect(message_error).toBe("*E-mail ou senha inválidos");
    });

    test('is not a client @smoke', async ({ page }) => {

       
        const numeroDeAbasAntesDoClique = (loginPage.page.context().pages()).length;
        await loginPage.isnot_client_btn.click();
 
    
        const numeroDeAbasAposOClique = (loginPage.page.context().pages()).length;
        expect(numeroDeAbasAposOClique).toBe(numeroDeAbasAntesDoClique + 1);
    
        const novasAbas = loginPage.page.context().pages();
        const novaAba = novasAbas[numeroDeAbasAntesDoClique];
        
        await novaAba.waitForLoadState();
    
        expect(novaAba.url()).toBe('https://www.growthmachine.com.br/');
    });

    test('forgot password', async ({page})=>{

        await loginPage.forgot_password_btn.click();
        await loginPage.page.waitForLoadState();

        expect(page.url()).toBe('https://client.stg.growthstation.app/forgotPass')

    });


});