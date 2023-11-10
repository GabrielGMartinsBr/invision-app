import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabHeaderComponent,
    TabMenuComponent,
  ],
  exports: [
    TabHeaderComponent,
    TabMenuComponent,
  ]
})
export class BaseModule { }