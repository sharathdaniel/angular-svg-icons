import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '../../svg-icons/svg-icons.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './list/list.component';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SvgIconsModule
  ]
})
export class UsersModule { }
