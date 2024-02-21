import { Locator, Page } from '@playwright/test';

export class LoginPage {
    page: Page;

    password_textbox: Locator;
    login_submit_btn: Locator;
    forgot_password_btn: Locator;
    isnot_client_btn: Locator;
    message_error: Locator;
    username_textbox: Locator;

    constructor(page: Page) {
    
        this.page = page;
        this.username_textbox = page.getByPlaceholder("E-mail");
        this.password_textbox = page.getByPlaceholder('Senha');
        this.login_submit_btn = page.getByRole('button', { name: 'Entrar' });
        this.isnot_client_btn = page.getByText("Não é cliente?");
        this.forgot_password_btn = page.locator('[href="/forgotPass"]');
    }

    async gotoLoginPage() {
        await this.page.goto('https://client.stg.growthstation.app/login');
        await this.page.waitForLoadState();
    }

    async login(user: object = {}) {

        const defaultUser: object = {
            username: 'usuariodaempresa3333@gmail.com',
            password: 'Senha.123'
        }

        //Permite que o usuário e senha possam ser modificados caso seja necessário,
        //mas a função já possui um usuário e senha padrão
        var userToLogin: any = Object.assign({}, defaultUser, user)

        await this.gotoLoginPage();
        await this.page.waitForURL('**/login')
        await this.username_textbox.fill(userToLogin.username);
        await this.password_textbox.fill(userToLogin.password);
        await this.login_submit_btn.click()
        await this.page.waitForURL('**/materials')

    }

}
