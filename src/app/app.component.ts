import { Component, NgModule } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
