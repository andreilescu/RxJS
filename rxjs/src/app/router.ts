import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ObservableViewComponent} from './observable-view/observable-view.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'observable',
    pathMatch: 'full'
  },
  { path: 'observable',
    component: ObservableViewComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true })
    ]})
export class AppRoutingModule {
  constructor() {
  }
}

