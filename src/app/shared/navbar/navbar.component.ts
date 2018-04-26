import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      user ? this.user = user : console.log('not logged in!');
    });
  }

  logout() {
    this.auth.logout();
    this.user = null;
  }

}
