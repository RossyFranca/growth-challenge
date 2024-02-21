import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { PlayBookPage } from '../pages/playbookpage';

var loginPage: LoginPage;
var playbookPage: PlayBookPage;

/**
 * 
 * Para o Playbook, crie testes que validem tanto o acesso e visualização
    de informações pelos utilizadores membros quanto a edição de dados
    pelos utilizadores administradores. Inclua testes para validar a
    atualização correta de informações e a restrição adequada de
    permissões baseadas nos diferentes níveis de acesso.
 */
test.describe('Play Book administrator scenarios', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.login();
        playbookPage = new PlayBookPage(page);
        await playbookPage.gotoPlayBook();
    });
    test('Playbook edit mode by an administrator @smoke', async ({ page }) => {

        await playbookPage.menu_our_history_field.click();

        expect(playbookPage.edit_mod_btn).toBeVisible();
        await playbookPage.edit_mod_btn.click();
        await playbookPage.our_history_field.fill("3.1 Nossa história editada");
       
        expect(await playbookPage.our_history_field.textContent()).toBe("3.1 Nossa história editada");
        
        //Desfaz a edição
        await playbookPage.our_history_field.fill("3.1 Nossa história");
    
      
    });
 

});