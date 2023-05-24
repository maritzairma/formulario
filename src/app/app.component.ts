import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnDisabled = true;
  loginDisabled = true;

  register = {
    name: '',
    email: '',
    password: '',
  }

  login = {
    email: '',
    password: ''
  }

  onRegister() {
    console.log(this.register);
    this.btnDisabled = !this.btnDisabled;
    if (this.loginDisabled == false) {
      this.loginDisabled = !this.loginDisabled;

    }

  }

  onLogin() {
    console.log(this.login);
    this.loginDisabled = !this.loginDisabled;
    if (this.btnDisabled == false) {
      this.btnDisabled = !this.btnDisabled;

    }
  }
}
