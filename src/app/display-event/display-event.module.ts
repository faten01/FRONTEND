import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEventComponent } from './display-event.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "displayevent",
      urls: [{ title: "displayevent", url: "/displayevent" }, { title: "displayevent" }],
    },
    component: DisplayEventComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DisplayEventModule { }
