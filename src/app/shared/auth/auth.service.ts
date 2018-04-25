import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private userSource = new BehaviorSubject<any>('default user');
  user = this.userSource.asObservable();
  private errorSource = new BehaviorSubject<any>('default error');
  error = this.errorSource.asObservable();
  constructor(protected afAuth: AngularFireAuth) {
    this.init();
  }

  get errors() {
    return this.error;
  }

  get currentUser() {
    return this.user;
  }

  init() {
    this.userSource.next(this.afAuth.auth.currentUser);
  }

  login(email: string, password: any) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch((err) => {
      const errorMessage = err.message;
      this.errorSource.next(errorMessage);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  signup(email: string, password: any) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch((err) => {
      const errorMessage = err.message;
      this.errorSource.next(errorMessage);
    });
  }
}
