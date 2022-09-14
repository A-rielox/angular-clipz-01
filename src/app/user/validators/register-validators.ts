import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {
   static match(controlName: string, matchingControlName: string): ValidatorFn {
      // null en caso de q no haya errores
      return (group: AbstractControl): ValidationErrors | null => {
         // el get me va a devolver un form-control dentro del group ( el group es el FormGroup )
         const control = group.get(controlName);
         const matchingControl = group.get(matchingControlName);

         if (!control || !matchingControl) {
            console.error('form controls can not be found in the form group');
            return { controlNotFound: false };
         }

         const error =
            control.value === matchingControl.value ? null : { noMatch: true };

         // agregando el error al "confirmPassword", para desplegar el error bajo el input
         matchingControl.setErrors(error);

         return error;
      };
   }
}
