import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = null;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
      this.auth.user.subscribe(user => {
        this.user = user;
      });
  }

  logout() {
    this.auth.logout();
    this.user = null;
  }

}
