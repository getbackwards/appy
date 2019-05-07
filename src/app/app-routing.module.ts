import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home-component/home-component/home-component.component';

import { HomeComponent } from './home/home-component/home.component';

// const routes: Routes = [];

// const routes: Routes = [
//   { path: 'search', component: SearchComponent },
//   { path: 'edit/:id', component: EditComponent },
//   { path: '', redirectTo: '/search', pathMatch: 'full' }
// ];


// https://angular.io/guide/router
const routes: Routes = [
  { path: 'home',      component: HomeComponent },
  // { path: '', component: HomeComponent }
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
