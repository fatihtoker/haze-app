import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  templateUrl: 'profile.html'
})

export class ProfileComponent {
  constructor(private afAuth: AngularFireAuth) {
    console.log('Auth state: ', afAuth.authState);
    console.log('Auth user: ', afAuth.auth.currentUser);
  }
}
