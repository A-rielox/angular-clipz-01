import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
   AngularFirestore,
   AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import IUser from '../models/user.model';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private usersCollection: AngularFirestoreCollection<IUser>;
   public isAuthenticated$: Observable<boolean>;
   public isAuthenticatedWithDelay$: Observable<boolean>;

   constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
      this.usersCollection = db.collection('users');
      // el paquete angular-firebase provee un observable para el current authenticated user
      // user current authentication status
      // auth.user.subscribe(console.log); // si esta logeado devuelve un "firebase.User" sino " null "
      // entonces este manda true si es q esta logeado
      this.isAuthenticated$ = auth.user.pipe(
         map((user) => !!user) /* ,
         delay(2000) */
      );
      this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(2300));
   }

   // userData viene como tipo any y da error, para solucionarlo creo la interfas en app/models
   public async createUser(userData: IUser) {
      if (!userData.password) {
         throw new Error('Password not provided!💩');
      }

      const userCred = await this.auth.createUserWithEmailAndPassword(
         userData.email,
         userData.password
      );

      if (!userCred.user) {
         throw new Error("User can't be found 🤦‍♂️");
      }

      const userUID = userCred.user.uid;

      // para acceder a una coleccion this.db.collection()
      // ocupo .doc() para poder yo asignar la id del documento
      await this.usersCollection.doc(userUID).set({
         // name: this.registerForm.controls.name.value,
         name: userData.name,
         email: userData.email,
         age: userData.age,
         phoneNumber: userData.phoneNumber,
      });

      await userCred.user.updateProfile({ displayName: userData.name });
   }
}
