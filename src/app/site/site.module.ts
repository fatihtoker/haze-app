import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site.routing';
import { HomeComponent } from './home';
import {ProfileComponent} from './profile';
import {WelcomeComponent} from './welcome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SiteRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    WelcomeComponent
  ],
  exports: []
})
export class SiteModule {
}
