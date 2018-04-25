import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => this.user = user);
    console.log(this.user);
  }

  login() {
    this.auth.login(this.email, this.password);
    this.auth.error.subscribe(error => this.error = error);

    if (this.error) {
      console.log(this.error);
    } else {
      console.log('Logged in');
    }
  }

}
