import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email: any;
  public password: any;
  public error: any;
  public user: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.email, this.password);
  }

  logout() {
    this.auth.logout();
  }

}
