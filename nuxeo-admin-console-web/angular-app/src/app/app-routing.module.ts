import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Route } from "@angular/router";
import { ROUTES_TITLE } from "./layouts/menu-bar/menu-bar.constants";

const routeTitle = ROUTES_TITLE;
export const appRoutes: Route[] = [
  {
    path: "",
    title: routeTitle.HOMeee,
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.nldsnkjfn),
  },
  {
    path: "elasticsearch-reindex",
    title: routeTitle.ELASTICSEARCH_REINDEX,
    loadChildren: () =>
      import(
        "./features/elastic-search-reindex/elastic-search-reindex.module"
      ).then(() => m.ElasticSearchReindexModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
