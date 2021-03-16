import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFound } from './not-found/not-found.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
