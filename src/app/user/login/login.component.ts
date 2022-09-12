import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   credentials = { email: '', password: '' };
   // con [(ngModel)]="credentials.email" PAL TWO WAY BINDING

   showAlert = false;
   alertMsg = 'Please wait! Your account is being logged.... 👍';
   alertColor = 'blue';

   constructor() {}

   ngOnInit(): void {}

   // no necesita q se le pase el event ya q ngSubmit para x defecto el refresh
   login() {
      this.showAlert = true;
      this.alertMsg = 'Please wait! Your account is being logged.... 👍';
      this.alertColor = 'blue';

      console.log('user logged.... 👍');
      console.log(this.credentials);
   }
}
