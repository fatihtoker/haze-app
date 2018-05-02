import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {SiteRouting} from './site.routing';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRouting,
    FormsModule
  ],
  declarations: [WelcomeComponent, HomeComponent, ProfileComponent]
})
export class SiteModule { }
