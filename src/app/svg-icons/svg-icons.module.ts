import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsComponent } from './svg-icons.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    SvgIconsComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SvgIconsComponent, IconComponent]
})
export class SvgIconsModule { }
