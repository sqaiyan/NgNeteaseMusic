import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./page/home/home.component";
import { IndexComponent } from "./page/index/index.component";
import { PlayListComponent } from "./page/playlist/playlist.component";
import { PlayIngComponent } from "./page/playing/playing.component";
export const appRoutes = [
  {
    path: "index",
    component: IndexComponent,
    children:[{
      path:'find',
      component:HomeComponent
    }]
  },
  {
    path: "playlist/:id",
    enableTracing:true,
    component: PlayListComponent
  },
  {
    path: "playing/:id",
    enableTracing:true,
    component: PlayIngComponent
  },
  {
    path: "**",
    redirectTo: "index/find",
    pathMatch: "full"
  }
];
