import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  authState: any = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    firebaseAuth.authState.subscribe(auth => this.authState = auth);
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }
  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['homepage']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['homepage']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

}
