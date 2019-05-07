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

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
