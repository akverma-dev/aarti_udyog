import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';


@NgModule({
  declarations: [
    VendorCreateComponent,
    VendorListComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
