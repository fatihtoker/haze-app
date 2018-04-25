import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  templateUrl: 'page.html'
})
export class PageComponent {

  user: any;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.auth.currentUser;
  }
}

