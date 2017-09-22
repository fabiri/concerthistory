import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {MainModule} from './main/main.module';

function loadMainModule() {
  return MainModule;
}

/**
 * Constant containing all routes inside the app module.
 */
export const appRoutes = [
  {path: '', loadChildren: loadMainModule},
  {path: '**', component: PageNotFoundComponent}];

/**
 * Router module contains all routes inside for the app module.
 */
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouterModule {
}
