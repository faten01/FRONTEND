import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './component/Event/Event.component';
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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: FullComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'about',
    component: FullComponent,
    loadChildren: () => import('./component/Event/About.module').then(m => m.AboutModule)
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
    path: 'chat',

    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },

  {
    path: 'rate',

    loadChildren: () => import('./rating/rating.module').then(m => m.RatingModule)
  },

  {
    path: 'notification',

    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
  },

  {
    path: 'type',

    loadChildren: () => import('./event-type/event-type.module').then(m => m.EventTypeModule)
  },

  {
    path: 'Notif',

    loadChildren: () => import('./add-notif/add-notif.module').then(m => m.AddNotifModule)
  },

  {
    path: 'adminreserv',
    component: FullComponent,


    loadChildren: () => import('./admin-reservations/admin-reservations.module').then(m => m.AdminReservationsModule)
  },

  {
    path: 'reservation',

    loadChildren: () => import('./reservation-form/reservation-form.module').then(m => m.ReservationFormModule)
  },
  {
    path: 'events',

    loadChildren: () => import('./user-event/user-event.module').then(m => m.UserEventModule)
  },
  {
    path: 'displayevent',

    loadChildren: () => import('./display-event/display-event.module').then(m => m.DisplayEventModule)
  },

  {
    path: 'displaystand',

    loadChildren: () => import('./display-stand/display-stand.module').then(m => m.DisplayStandModule)
  },

  {
    path: 'eventrate/:id',

    loadChildren: () => import('./event-rate/event-rate.module').then(m => m.EventRateModule)
  },

  {
    path: 'addtype',
    component: FullComponent,

    loadChildren: () => import('./addtype/addtype.module').then(m => m.AddtypeModule)
  },

  {
    path: 'listype',
    component: FullComponent,

    loadChildren: () => import('./listype/listype.module').then(m => m.ListypeModule)
  },
  {
    path: 'editype/:_id',
    component: FullComponent,

    loadChildren: () => import('./editype/editype.module').then(m => m.EditypeModule)
  },

  {
    path: 'home',

    children: [
      {
        path: '',

        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },


    ]
  },
 // { path: '**', redirectTo: '' } // Handle invalid routes
];
