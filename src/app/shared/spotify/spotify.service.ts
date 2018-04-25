/*import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';

  private errorSource: Subject<any>;

  get error$() {
    return this.errorSource.asObservable();
  }

  constructor(private http: HttpClient) {
    this.errorSource = new ReplaySubject<any>(1);
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = SpotifyService.BASE_URL + URL;
    if (params) {
      queryURL = queryURL + '?' + params.join('&');
    }

    return this.http.get(queryURL).map((res: any) => res.json());
  }

  search(query: string, type: string){
    return this.query('/search', [
      'q=' + query,
      'type=' + type
    ]);
  }

  searchTrack(query: string) {
    return this.search(query, 'track');
  }

  getTrack(id: string) {
    return this.query('/tracks/' + id);
  }

  getArtist(id: string) {
    return this.query('/artists/' + id);
  }

  getAlbum(id: string) {
    return this.query('/albums/' + id);
  }
}*/
