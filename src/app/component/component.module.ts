import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './StandList/StandList.component';
import { NgbdAlertBasicComponent } from './stand/alert.component';
import { NgbdDropdownBasicComponent } from './EventList/EventList.component';
import { NgbdnavBasicComponent } from './userList/nav.component';
import { NgbdButtonsComponent } from './user/buttons.component';
import { CardsComponent } from './EventEdit/EventEdit.component';
import { TableComponent } from "./table/table.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    NgbdButtonsComponent,
    CardsComponent,
    TableComponent
  ],
})
export class ComponentsModule { }
