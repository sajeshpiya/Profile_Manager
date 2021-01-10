import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfilesComponent } from './pages/view-profiles/view-profiles.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProfilesComponent,
    CreateProfileComponent,
    UpdateProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
