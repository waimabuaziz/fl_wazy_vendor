import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlementsComponent } from './settlements.component';
import { SettlementsRoutingModule } from './settlements-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    SettlementsComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    SettlementsRoutingModule
  ]
})
export class SettlementsModule { }
