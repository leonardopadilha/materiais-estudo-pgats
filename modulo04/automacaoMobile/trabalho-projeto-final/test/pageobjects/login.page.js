import { $ } from '@wdio/globals'
import element from '../elements/login_element.js';

export default class LoginPage {

    get inputUsername () {
        return $(element.input.user);
    }

    get inputPassword () {
        return $(element.input.password);
    }

    get btnSubmit () {
        return $(element.button.submit);
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}
