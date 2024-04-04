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
import { LoaderComponent } from './component/loader/loader.component';
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







@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoaderComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    UserspaceComponent,
    
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
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      
     
    },
    [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


