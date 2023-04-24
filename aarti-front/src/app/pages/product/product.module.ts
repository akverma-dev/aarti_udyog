import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCreateComponent } from "./product-create/product-create.component";

@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}
