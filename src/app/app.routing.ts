import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './site/home';
import {WelcomeComponent} from './site/welcome';
import {AuthGuard, RedirectService} from './shared/auth';
import {PageComponent} from './shared/page';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [RedirectService]},
  {
    path: '',
    component: PageComponent,
    canActivate: [AuthGuard],
    children: [
          { path: 'anasayfa', component: HomeComponent },
          { path: 'auth/login', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {

}
