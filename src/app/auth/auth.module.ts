import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthService, AuthComponent} from './';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthRouting} from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRouting
  ],
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  exports: [AuthComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    };
  }
}
