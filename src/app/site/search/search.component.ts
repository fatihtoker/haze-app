import {Component, Input, OnInit} from '@angular/core';
import {TrackModel} from '../../shared/spotify/track/track.model';
import {SpotifyService} from '../../shared/spotify/spotify.service';
import {PostService} from '../../shared/post/post.service';
import {AuthService} from '../../auth';
import {UserModel} from '../../auth/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

//TODO: Make a pagination component, use spotify data's 'next', 'limit', 'offset'.

export class SearchComponent implements OnInit {

  //@Input() searchType: string;

  query: any;
  tracks: TrackModel[];
  users: UserModel[];


  //nextUri: string;

  constructor(private spotify: SpotifyService, private post: PostService, private auth: AuthService) { }

  ngOnInit() {
  }

  onTrackSearchClicked() {
    this.spotify.init();
    this.users = [];
    this.tracks = [];
    this.spotify.searchTrack(this.query).subscribe((data: any) => {
      const trackData = data.tracks;
      //this.nextUri = trackData.next;
      for (const model of trackData.items) {
        this.tracks.push(new TrackModel(model));
      }
    });
  }

  onUserSearchClicked() {
    this.tracks = [];
    this.users = [];
    this.auth.getUsers().valueChanges().subscribe((data: any) => {
      for (const model of data) {
        let key = Object.keys(model)
        this.users.push(new UserModel(model[key]));
      }
    });
  }

  onShareClicked(post: TrackModel) {
    this.post.createPost(post);
  }

}
