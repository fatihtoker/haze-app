import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {SiteRouting} from './site.routing';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRouting,
    FormsModule
  ],
  declarations: [WelcomeComponent, HomeComponent, ProfileComponent, SearchComponent, ExploreComponent]
})
export class SiteModule { }
