import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthService, AuthComponent} from './auth';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {SharedRouting} from './shared.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedRouting
  ],
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  exports: [AuthComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }
}
