import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
   enableProdMode();
}

platformBrowserDynamic()
   .bootstrapModule(AppModule)
   .catch((err) => console.error(err));

//   In either the
// tsconfig.json
// 		 or
// tsconfig.app.json
// files, you can set the
//
// noPropertyAccessFromIndexSignature to false
//
// inside the compilerOptions object. This should effectively disable the option.
