import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  {
    path: "vendor",
    loadChildren: () =>
      import("../../pages/vendor/vendor.module").then((n) => n.VendorModule),
  },

  {
    path: "product",
    loadChildren: () =>
      import("../../pages/product/product.module").then((n) => n.ProductModule),
  },

  {
    path: "order",
    loadChildren: () =>
      import("../../pages/order/order.module").then((n) => n.OrderModule),
  },

  {
    path: "category",
    loadChildren: () =>
      import("../../pages/category/category.module").then(
        (n) => n.CategoryModule
      ),
  },

  {
    path: "user",
    loadChildren: () =>
      import("../../pages/user/user.module").then((n) => n.UserModule),
  },
];
