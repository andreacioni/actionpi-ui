import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MaterialModule } from '../material/material.module'
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
