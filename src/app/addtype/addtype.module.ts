import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddtypeComponent } from './addtype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "addtype",
      urls: [{ title: "addtype", url: "/addtype" }, { title: "addtype" }],
    },
    component: AddtypeComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AddtypeModule { }
