import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../shared/spotify/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accessToken: any;
  query: any;
  data: any;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    if (location.hash) {
      this.accessToken = location.hash.substr(1).split('=')[1].slice(0, -11);
      this.spotify.changeAccessToken(this.accessToken);
    }
  }

  onAuthClicked() {
    this.spotify.authorize();
  }

  onSearchClicked() {
    this.spotify.init();
    this.spotify.searchTrack(this.query).subscribe(data => {
      this.data = data;
      console.log(data);
    });

    console.log(this.data);
  }
}
