import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {UserModel} from './user.model';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  private errorSource = new BehaviorSubject<string>(null);
  error = this.errorSource.asObservable();

  authState: any = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
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
      .then(user => {
        this.router.navigate(['homepage']);
        this.errorSource.next(null);
        let users: AngularFireList<UserModel>
        users = this.db.list(`users/${user.uid}`);
        users.push(new UserModel(user)).then(() => {
          console.log('successfully added to db');
        });
      })
      .catch(err => {
        this.errorSource.next(err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['homepage']);
        this.errorSource.next(null);
      })
      .catch(err => {
        this.errorSource.next(err.message);
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

  getUsers() {
    return this.db.list(`users`);
  }

}
