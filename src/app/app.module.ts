import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { GitSearchService } from './git-search.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepoComponent } from './repo/repo.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { JoinDateCountPipe } from './join-date-count.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    PageNotFoundComponent,
    RepoComponent,
    JoinDateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,

  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
