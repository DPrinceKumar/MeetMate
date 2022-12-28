import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { ProfileSwitchComponent } from './profile-switch/profile-switch.component';
import { SuggestionsForYouComponent } from './suggestions-for-you/suggestions-for-you.component';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StatusBarComponent,
    FeedCardComponent,
    ProfileSwitchComponent,
    SuggestionsForYouComponent,
    BottomNavBarComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
