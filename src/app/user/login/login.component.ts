import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
   inSubmission = false;

   constructor(private auth: AngularFireAuth) {}

   ngOnInit(): void {}

   // no necesita q se le pase el event ya q ngSubmit para x defecto el refresh
   async login() {
      this.showAlert = true;
      this.alertMsg = 'Please wait! Your account is being logged.... 👍';
      this.alertColor = 'blue';
      this.inSubmission = true;

      try {
         await this.auth.signInWithEmailAndPassword(
            this.credentials.email,
            this.credentials.password
         );
      } catch (error) {
         this.inSubmission = false;
         this.alertMsg = 'An error occurred, try again later';
         this.alertColor = 'red';

         console.log(error);
         return;
      }

      this.alertMsg = 'Success! You are now logged in.... 👍';
      this.alertColor = 'green';
   }
}
