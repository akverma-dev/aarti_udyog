import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  {
    path: 'vendor-create',
    component: VendorCreateComponent
  },

  {
    path: 'vendor-list',
    component: VendorListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
