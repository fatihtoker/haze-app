import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

const STORAGE_KEY = 'accessToken';

@Injectable()
export class SpotifyService {

  static BASE_URL = 'https://api.spotify.com/v1';
  static clientID = environment.spotify.clientId;
  static redirectURI = environment.spotify.redirect_uri;
  static authParams = 'client_id=' + SpotifyService.clientID + '&response_type=token' + '&redirect_uri=' + SpotifyService.redirectURI + '&scope=user-read-private';

  token: any;

  header: any;

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
    this.token = storage.get(STORAGE_KEY);
  }

  init() {
    this.header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
  }

  authorize() {
    window.location.href = 'https://accounts.spotify.com/authorize?' + SpotifyService.authParams;
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.get(queryURL, {headers: this.header}).map((res: any) => res);
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }
}

