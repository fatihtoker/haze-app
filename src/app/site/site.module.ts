import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {SiteRouting} from './site.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRouting
  ],
  declarations: [WelcomeComponent, HomeComponent]
})
export class SiteModule { }
