import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { MatDatepickerModule } from '@angular/material/datepicker';


import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Approutes } from './app-routing.module';

//import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { LoaderComponent } from './component/EditStand/EditStand.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FooterComponent } from './footer/footer.component';
import { UserspaceComponent } from './userspace/userspace.component';
import { ScheduleModule, RecurrenceEditorModule, AgendaService, DayService, MonthAgendaService, MonthService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ChatComponent } from './chat/chat.component';
import { RatingComponent } from './rating/rating.component';
import { NotificationComponent } from './notification/notification.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { AddNotifComponent } from './add-notif/add-notif.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutModule } from './component/Event/About.module';
import { UserEventComponent } from './user-event/user-event.component';




export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(TranslateModule.forRoot())],
};



@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    UserspaceComponent,
    ChatComponent,
    RatingComponent,
    NotificationComponent,
    EventTypeComponent,
    AddNotifComponent,
    ReservationFormComponent,
    AdminReservationsComponent,
    UserEventComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    MatDatepickerModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ScheduleModule, RecurrenceEditorModule,
    FullCalendarModule ,
    FlatpickrModule.forRoot(),
    LoaderComponent,
    AboutModule

    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      
      
     
    },
    [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
    
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }


