import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {SiteRouting} from './site.routing';

@NgModule({
  imports: [
    CommonModule,
    SiteRouting
  ],
  declarations: [WelcomeComponent]
})
export class SiteModule { }
