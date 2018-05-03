import { Injectable } from '@angular/core';
import {TrackModel} from '../spotify/track/track.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from '../../auth';


@Injectable()
export class PostService {

  posts: AngularFireList<TrackModel[]> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.auth.user.subscribe(user => {
      if (user) { this.init(user.uid); }
    });
  }

  init(userId: string) {
    this.posts = this.db.list(`posts/${userId}`);
  }

  getPostsList(): AngularFireList<TrackModel[]> {
    if (!this.userId) { return; }
    this.posts = this.db.list(`posts/${this.userId}`);
    return this.posts;
  }

  createPost(post: any) {
    this.posts.push(post).then(() => {
      console.log('created successfully!');
    }, err => {
      console.log('something happened: ', err);
    });
  }

}
