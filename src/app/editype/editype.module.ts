import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditypeComponent } from './editype.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "editype",
      urls: [{ title: "editype", url: "/editype" }, { title: "editype" }],
    },
    component: EditypeComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EditypeModule { }
