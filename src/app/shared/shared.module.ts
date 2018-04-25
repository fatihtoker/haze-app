import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PageComponent} from './page';
import {NavbarComponent} from './navbar';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageComponent,
    NavbarComponent
  ],
  exports: [
    PageComponent
  ],
  providers: [
  ]
})
export class SharedModule {
}
