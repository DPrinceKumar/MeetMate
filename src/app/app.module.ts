import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { ProfileSwitchComponent } from './profile-switch/profile-switch.component';
import { SuggestionsForYouComponent } from './suggestions-for-you/suggestions-for-you.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, StatusBarComponent, FeedCardComponent, ProfileSwitchComponent, SuggestionsForYouComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
