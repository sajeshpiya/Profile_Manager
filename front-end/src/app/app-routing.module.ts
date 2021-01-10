import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { HomeComponent } from './pages/home/home.component';
// import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { ViewProfilesComponent } from './pages/view-profiles/view-profiles.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'view-profiles', component: ViewProfilesComponent},
  { path: 'create-profile', component: CreateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
