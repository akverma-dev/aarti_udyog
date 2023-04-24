import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoryRoutingModule } from "./category-routing.module";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { CreateListComponent } from "./create-list/create-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [CreateCategoryComponent, CreateListComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CategoryModule {}
