import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { MaterialsPage } from '../pages/materialspage';

var loginPage: LoginPage;
var materialsPage: MaterialsPage;
test.describe.only('Play Book scenarios', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.login();
    });
    test('teste', async ({ page }) => {

        console.log("test1")

    });

});