import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './StandList/StandList.component';
import { NgbdAlertBasicComponent } from './stand/alert.component';

import { NgbdDropdownBasicComponent } from './EventList/EventList.component';
import { NgbdnavBasicComponent } from './userList/nav.component';
import { BadgeComponent } from './userEdit/badge.component';
import { NgbdButtonsComponent } from './user/buttons.component';
import { CardsComponent } from './EventEdit/EventEdit.component';
import { TableComponent } from './table/table.component';
import { LoaderComponent } from './EditStand/EditStand.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'EventEdit/:_id',
				component: CardsComponent
			},
			{
				path: 'StandList',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'users/:_id',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'EventList',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: NgbdButtonsComponent
			},

			{
				path: 'EditStand/:_id',
				component: LoaderComponent
			},
		]
	}
];
