import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './component/Event/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';



/*export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },

      //{ path: '', component: HomeComponent, pathMatch: 'full' },

      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./component/Event/about.module').then(m => m.AboutModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
    
  },
  {
    path: '**',
    redirectTo: '/starter'
  },


];*/





export const Approutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: FullComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'about',
    component: FullComponent,
    loadChildren: () => import('./component/Event/about.module').then(m => m.AboutModule)
  },
  {
    path: 'register',
    component: LayoutComponent,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    component: LayoutComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },{
    path: 'component',
    component: FullComponent,
    loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
  },

  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule)
  },

  {
    path: 'userspace',
   
    loadChildren: () => import('./userspace/userspace.module').then(m => m.UserspaceModule)
  },
  {
    path: 'home',
    
    children: [
      {
        path: '',
        component: LayoutComponent,

        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },

     
    ]
  },
  { path: '**', redirectTo: '/dashboard' } // Handle invalid routes
];
