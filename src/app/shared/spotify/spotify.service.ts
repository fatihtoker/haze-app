import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SpotifyService {

  static BASE_URL = 'https://api.spotify.com/v1';
  static clientID = environment.spotify.clientId;
  static redirectURI = environment.spotify.redirect_uri;

  static authParams = 'client_id=' + SpotifyService.clientID + '&response_type=token' + '&redirect_uri=' + SpotifyService.redirectURI + '&scope=user-read-private';

  private accessToken = new BehaviorSubject<string>('default token');

  currentAccessToken = this.accessToken.asObservable();

  header = new HttpHeaders();

  constructor(private http: HttpClient, private router: Router) {
  }

  changeAccessToken(token: string) {
    this.accessToken.next(token);
  }

  init() {
    this.currentAccessToken.subscribe(token => {
      this.header.set('Authorization', 'Bearer ' + token);
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
    console.log(this.header);
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

