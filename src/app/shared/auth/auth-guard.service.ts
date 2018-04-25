import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate{

  private user: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }
  canActivate(): Observable<boolean>{
    this.user = this.afAuth.auth.currentUser;
    if (!this.user) {
      this.router.navigate(['/auth/login']);
    }
    return this.user;
  }
}
