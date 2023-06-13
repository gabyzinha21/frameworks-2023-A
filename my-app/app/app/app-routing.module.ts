import { PageNotFoudComponent } from './components/page-not-foud/page-not-foud.component';
import { GridComponent } from './components/grid/grid.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: "login", component:LoginComponent},
  { path: "hero", component: HeroComponent},
  { path: "grid", component: GridComponent},
  { path: "dashboard", component: DashboardComponent},


  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "**", component: PageNotFoudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
