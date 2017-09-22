import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRouterModule} from './main.routes';
import {MainComponent} from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouterModule
  ],
  exports: [
    MainComponent,
    MainRouterModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
