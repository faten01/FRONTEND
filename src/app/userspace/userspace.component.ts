import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { UserspaceService } from 'src/app/services/userspace.service';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { EventColor } from 'calendar-utils';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { jwtDecode } from 'jwt-decode';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-userspace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  templateUrl: './userspace.component.html',
  styleUrls: ['./userspace.component.scss']
})
export class UserspaceComponent implements OnInit    {
  nom!:string
  date!:string
  dateFin!: string
  id!:number
  checkbox:boolean = false;



  @ViewChild('modalContent', { static: true })
  modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent: CalendarEvent<any>) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: any = [
    /*{
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors['red'] },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { ...colors['yellow'] },
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { ...colors['blue'] },
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },*/
    {
      start: this.date,
      end: this.dateFin,
      title: this.nom,
      color: { ...colors['red'] },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },


  ];

  activeDayIsOpen: boolean = true;
  modal: any;



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent: CalendarEvent<any>) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event: CalendarEvent<any>) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }




  successMessage !: string
  errorMessage !: string
  isLoading:boolean=false;
  title!: string
  end!: string



  constructor(private userspaceservice : UserspaceService, private auth:AuthService, private router : Router, private login: LoginService) {}

  token:any;
  ngOnInit(){

    this.token = localStorage.getItem('token');
    this.user = this.login.customJwtDecode(this.token);

      this.userspaceservice.getEvents().subscribe({
        next: (res) => {
          for (let i = 0; i < res.length; i++) {
            this.events.push({
              title: res[i].nom,
              start: new Date(res[i].date),
              end: new Date(res[i].dateFin),
              color: colors['blue'], // or any logic to assign colors
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true,
              },
              allDay: true,
            });
          }
          this.refresh.next(); // Refresh the view
        },
        error: (error) => {
          console.error('Error fetching events:', error);
        }
      });
    }










  eventData() {

    const startDate = new Date(this.date);
    const formattedStartDate = startDate.toISOString().slice(0, 19).replace('T', ' ');

    const endDate = new Date(this.dateFin);
    const formattedEndDate = endDate.toISOString().slice(0, 19).replace('T', ' ');
    var eventData = {
     nom:this.nom,
     date: formattedStartDate,
     dateFin: formattedEndDate,
     successMessage: this.successMessage,
     errorMessage: this.errorMessage,



    }



    this.userspaceservice.postEvents(eventData).subscribe(
      (response) => {
        console.log('Response received:', response);
        this.successMessage = 'Form submitted successfully.';
        // Handle the response from the server
      },
      (error) => {



        console.error('Error occurred:', error.error);
        this.errorMessage = 'Form submission failed.';
      }
    );}





    user:any;


  loggedIn:boolean = false;

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}



export interface Event {
  id :number;
  nom: string;
  date: Date;
  dateFin: Date;
  // Add any other properties you need
}


