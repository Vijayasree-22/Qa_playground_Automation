export class BankAuthentication {
    constructor(page) {
        this.page = page;

        this.bankUrl = 'https://www.qaplayground.com/bank';

        this.username = page.getByTestId('username-input');
        this.password = page.getByTestId('password-input');
        this.rememberMe = page.getByRole('checkbox', { name: 'Remember me' });
        this.loginBtn = page.getByTestId('login-button');
    }

    async open() {
        await this.page.goto(this.bankUrl);
    }

    async login(username, password) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.rememberMe.check();

        await Promise.all([
            this.page.waitForURL('**/dashboard'),
            this.loginBtn.click()
        ]);
    }
}