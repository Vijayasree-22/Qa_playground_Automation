import { expect } from '@playwright/test';

export class Signup {
    constructor(page){
        this.page = page;
        this.homeUrl = 'https://www.qaplayground.com/';

        this.signInLink = page.getByLabel('Main navigation').getByRole('link', { name: 'Login' });
        this.signUpLink = page.getByRole('link', { name: 'Sign up' });

        this.signInHeading = page.getByRole('heading', { name: 'Sign In' });
        this.signUpHeading = page.getByRole('heading', { name: 'Create Account' });

        this.CA_name = page.getByTestId('name-input');
        this.CA_email = page.getByTestId('email-input');
        this.CA_password = page.getByTestId('password-input');
        this.CA_confirmPassword = page.getByTestId('confirm-password-input');

        this.CA_passwordShow = page.getByTestId('toggle-password-visibility');
        this.CA_confirmPasswordShow = page.getByTestId('toggle-confirm-password-visibility');
    }

    async openHome() {
        await this.page.goto(this.homeUrl);
    }

    async openSignIn(){
        await this.signInLink.click();
    }

    async isSignInPageVisible(){
        await expect(this.signInHeading).toBeVisible();
    }

    async isSignUpPageVisible(){
        await expect(this.signUpHeading).toBeVisible();
    }

    async openSignUp(){
        await this.signUpLink.click();
    }

    async fillValidSignupData(){
        await this.CA_name.fill('Vijaya');
        await this.CA_email.fill('Vijaya@gmail.com');
        await this.CA_password.fill('Vijaya@123');
        await this.CA_confirmPassword.fill('Vijaya@123');
    }

    async verifyPasswordToggle(field, toggle) {

        await expect(field).toHaveAttribute('type', 'password');

        await toggle.click();
        await expect(field).toHaveAttribute('type', 'text');

        await toggle.click();
        await expect(field).toHaveAttribute('type', 'password');
    }
}