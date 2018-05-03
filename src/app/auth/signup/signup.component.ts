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
  public alertVisible: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.email, this.password);
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
