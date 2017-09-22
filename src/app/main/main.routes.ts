import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MainComponent} from './main.component';

/**
 * Constants containing all routes inside the main module.
 */
const routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouterModule {
}
