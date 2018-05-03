import {Component, Inject, OnInit} from '@angular/core';
import {SpotifyService} from '../../shared/spotify/spotify.service';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

const STORAGE_KEY = 'accessToken';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accessToken: any;

  constructor(private spotify: SpotifyService, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    if (location.hash) {
      this.accessToken = location.hash.substr(1).split('=')[1].slice(0, -11);
      this.storage.set(STORAGE_KEY, this.accessToken);
      window.location.href = '/homepage';
    } else {
      this.accessToken = this.storage.get(STORAGE_KEY);
    }
  }

  onAuthClicked() {
    this.spotify.authorize();
  }
}
