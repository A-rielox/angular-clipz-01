import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
   registerForm = new FormGroup({
      // '' es el default value q le paso a este
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(''),
      age: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
      phoneNumber: new FormControl(''),
   });
}

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
