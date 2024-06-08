import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListypeComponent } from './listype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "listype",
      urls: [{ title: "listype", url: "/listype" }, { title: "listype" }],
    },
    component: ListypeComponent,
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
    MatFormFieldModule, // Make sure it's imported here

  ]
})
export class ListypeModule { }
