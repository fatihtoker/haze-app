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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      user ? this.user = user : console.log('not logged in!');
    });
  }

  login() {
    this.auth.login(this.email, this.password);
  }

  logout() {
    this.auth.logout();
  }
}
