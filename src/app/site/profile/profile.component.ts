import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth';
import {FollowService} from '../../shared/follow/follow.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser;
  user; userId;
  followers;
  following;

  isOwnProfile = false;
  followerCount: number;
  isFollowing: boolean;

  constructor(private auth: AuthService, private followService: FollowService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.userId = params['id']);
    this.auth.user.subscribe(user => {
      this.currentUser = user;
      this.fetchData(user.uid, this.userId);
    });
  }

  fetchData(currentUserId: any, userId: any) {
    if (!userId || userId === currentUserId) { this.isOwnProfile = true; }
    console.log('currentUser: ', currentUserId);
    console.log('user: ', userId);
    console.log('ownProfile?: ', this.isOwnProfile);
    const user = this.isOwnProfile ? currentUserId : userId;
    this.followers = this.followService.getFollowers(user);
    this.followers.valueChanges().subscribe(val => {console.log('followers: ', Object.keys(val)); });
    //console.log('followers: ', this.followers);

    //this.followers = this.followService.getFollowers(currentUserId)
  }

  follow() {
    const currentUserId = this.currentUser.uid;
    if (this.userId) {
      this.followService.follow(currentUserId, this.userId);
      console.log('done?!');
    }
  }

}
