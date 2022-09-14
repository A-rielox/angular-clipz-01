import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
   constructor(private auth: AuthService) {}

   inSubmission = false;

   showAlert = false;
   alertMsg = 'Please wait! Your account is being created.... 👍';
   alertColor = 'blue';

   // prettier-ignore
   registerForm = new FormGroup({
      // '' es el default value q le paso a este
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl<number | null>(null, [Validators.required,Validators.min(18),Validators.max(120),]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),]),
      confirm_password: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required,Validators.minLength(18),Validators.maxLength(18),]),
   },[RegisterValidators.match('password','confirm_password')]);

   // no necesita q se le pase el event ya q ngSubmit para x defecto el refresh
   async register() {
      this.showAlert = true;
      this.alertMsg = 'Please wait! Your account is being created.... 👍';
      this.alertColor = 'blue';

      this.inSubmission = true;
      console.log('form submitted.... 👍');

      try {
         await this.auth.createUser(this.registerForm.value as IUser);
      } catch (error) {
         this.alertMsg = 'ocurrio un error, intentar mas tarde';
         this.alertColor = 'red';

         this.inSubmission = false;

         return;
      }

      this.alertMsg = 'cuenta creada';
      this.alertColor = 'green';
   }
}

// regex
// - at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters

// para conectarlas a las form en el html le pongo el
// <form [formGroup]="registerForm">

//
// <input
//    formControlName="name"
// si NO hago el binding ( [formControlName] ) => el value se va a interpretar directamente como string

//
//    registerForm.controls.name.errors  ---> para acceder a los errores
// <input
//    formControlName="name"
//    type="text"
//    class="blo...go-400"
//    placeholder="Enter Name"
//    minlength="3"
// />

// <p>{{ registerForm.controls.name.errors }}</p>
