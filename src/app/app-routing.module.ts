import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const appRoutes: Routes = [
  {path:'',
    component: PagesComponent,
    children:[
      {path:'dashboard',component: DashboardComponent},
      {path:'categories',component: CategoriesComponent},
      {path:'', redirectTo: '/dashboard', pathMatch:'full'}
    ]
  },
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  // 
  {path:'**', component: PagenotfoundComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});