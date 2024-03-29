import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './stand/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './userList/nav.component';
import { BadgeComponent } from './userEdit/badge.component';
import { NgbdButtonsComponent } from './user/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'users/:id',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: NgbdButtonsComponent
			}
		]
	}
];
