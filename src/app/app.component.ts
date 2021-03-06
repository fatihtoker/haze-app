import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public users: Observable<any[]>;
  public email: string;
  public password: string;
  public user: any;

  constructor(db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.users = db.collection('/users').valueChanges();
  }
  ngOnInit() {
    this.user = this.afAuth.auth.currentUser;
  }
  signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
