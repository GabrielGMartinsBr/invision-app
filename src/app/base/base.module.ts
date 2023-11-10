import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TabHeaderComponent,
    TabMenuComponent,
  ],
  exports: [
    FontAwesomeModule,
    TabHeaderComponent,
    TabMenuComponent,
  ]
})
export class BaseModule { }