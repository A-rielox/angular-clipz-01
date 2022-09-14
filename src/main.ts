import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

if (environment.production) {
   enableProdMode();
}

firebase.initializeApp(environment.firebase);

// ya q el event puede ser emitido varias veces
let appInit = false;

firebase.auth().onAuthStateChanged(() => {
   if (!appInit) {
      platformBrowserDynamic()
         .bootstrapModule(AppModule)
         .catch((err) => console.error(err));
   }

   appInit = true;
});

//   In either the
// tsconfig.json
// 		 or
// tsconfig.app.json
// files, you can set the
//
// noPropertyAccessFromIndexSignature to false
//
// inside the compilerOptions object. This should effectively disable the option.

//
//
// const firebaseConfig = {
//    apiKey: 'AIzaSyCiv0YnZ3KiHjKk7DF2awj2P-xfmwJ7dxc',
//    authDomain: 'clips-dbe15.firebaseapp.com',
//    projectId: 'clips-dbe15',
//    storageBucket: 'clips-dbe15.appspot.com',
//    messagingSenderId: '1013248488526',
//    appId: '1:1013248488526:web:ce0a237ed5edfdde93ff1f',
// };
