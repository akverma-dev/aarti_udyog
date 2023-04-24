import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { CreateListComponent } from "./create-list/create-list.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";

const routes: Routes = [
  { path: "create-category", component: CreateCategoryComponent },
  { path: "create-list", component: CreateListComponent },
  { path: "edit-category/:id", component: EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
