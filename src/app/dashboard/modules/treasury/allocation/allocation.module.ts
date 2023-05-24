import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllocationRoutingModule } from './allocation-routing.module';
import { AllocationComponent } from './allocation.component';


@NgModule({
  declarations: [
    AllocationComponent
  ],
  imports: [
    CommonModule,
    AllocationRoutingModule
  ]
})
export class AllocationModule { }
