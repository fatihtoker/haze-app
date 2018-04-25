import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  @Input() user: any;

  constructor (private router: Router, private afAuth: AngularFireAuth) {

  }

  logIn() {
    this.router.navigate(['/auth/login']);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
