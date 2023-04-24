import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderCreateComponent } from "./order-create/order-create.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";

const routes: Routes = [
  {
    path: "order-create",
    component: OrderCreateComponent,
  },
  {
    path: "order-list",
    component: OrderListComponent,
  },
  {
    path: "order-detail",
    component: OrderDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
