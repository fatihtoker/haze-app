import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {SpotifyService} from './spotify/spotify.service';
import {AuthModule} from '../auth/auth.module';
import {AuthService} from '../auth';
import {PostService} from './post/post.service';
import {FollowService} from './follow/follow.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SpotifyService,
        PostService,
        FollowService
      ]
    };
  }
}
