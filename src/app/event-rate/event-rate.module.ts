import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventTypeComponent } from '../event-type/event-type.component';
import { EventRateComponent } from './event-rate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "EventRate",
      urls: [{ title: "EventRate", url: "/eventrate" }, { title: "EventRate" }],
    },
    component: EventRateComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatFormFieldModule, 
  ]
})
export class EventRateModule { }
