import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class FollowService {

  constructor(private db: AngularFireDatabase) { }

  getFollowers(userId: string) {
    return this.db.object(`followers/${userId}`);
  }

  //return true if {followerId} is following {followerId}
  isFollowing(followerId: string, followedId: string) {
    return this.db.list(`following/${followerId}/${followedId}`);
  }

  follow(followerId: string, followedId: string) {
    this.db.object(`followers/${followedId}`).update({[followerId]: true});
    this.db.object(`following/${followerId}`).update({[followedId]: true});
  }

  unfollow(followerId: string, followedId: string) {
    this.db.list(`followers/${followedId}/${followerId}`).remove();
    this.db.list(`following/${followerId}/${followedId}`).remove();
  }
}
