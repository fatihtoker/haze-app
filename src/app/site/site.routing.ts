import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../auth/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'homepage', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'profile', canActivate: [AuthGuard], children: [
      {path: '', component: ProfileComponent},
      {path: ':id', component: ProfileComponent}
    ]},
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]}
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
