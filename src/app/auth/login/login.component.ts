import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;
  public error: any;
  public user: any;
  public alertVisible: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      user ? this.user = user : console.log('not logged in!');
    });
  }

  login() {
    this.error = null;
    this.auth.login(this.email, this.password);
    this.auth.error.subscribe(err => {
      if (err) { this.error = err; this.alertVisible = true; }
    });
  }

  logout() {
    this.auth.logout();
  }

  closeDialog() {
    this.alertVisible = false;
  }
}
