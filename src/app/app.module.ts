import { BrowserModule, enableDebugTools } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { WeUiModule } from "ngx-weui";
import { RouterModule } from "@angular/router";
import { ElCarouselModule } from "./components/carousel/module";
import { appRoutes } from "./app.route";

import { IndexComponent } from "./page/index/index.component";
import { HomeComponent } from "./page/home/home.component";
import { PlayListComponent } from "./page/playlist/playlist.component";
import { PlayIngComponent } from "./page/playing/playing.component";
import { TabComponent } from "./components/tab/tab.component";
import { PlayIconComponent } from "./components/playicon/playicon.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { SongListComponent } from "./components/songlist/songlist.component";
import { PlayActionComponent } from "./components/playaction/playaction.component";
import { LrcComponent } from "./components/lrc/lrc.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    PlayListComponent,
    PlayIngComponent,
    TabComponent,
    PlayIconComponent,
    LoadingComponent,
    SongListComponent,
    PlayActionComponent,
    LrcComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WeUiModule.forRoot(),
    ElCarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  enableDebugTools;
}
