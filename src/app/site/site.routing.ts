import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'homepage', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SiteRouting {
}
