import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Route } from "@angular/router";
import { ROUTES_TITLE } from "./layouts/menu-bar/menu-bar.constants";

const routeTitle = ROUTES_TITLE;
export const appRoutes: Route[] = [
  {
    path: "",
    title: routeTitle.home,
    loadChildren: () =>
      import("./features/home/home.module").then((m) => ),
  },
  {
    path: "elasticsearch-reindex",
    title: routeTitle.ELASTICSEARCH_REINDEX,
    loadChildren: () =>
      import(
        "./features/elastic-search-reindex/elastic-search-reindex.module"
      ).then((m) => m.ElasticSearchReindexModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.modul").then((m) => m.AuthModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(x)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
