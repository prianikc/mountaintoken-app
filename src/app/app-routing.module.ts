import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MountaintokenPageComponent } from './mountaintoken-page/mountaintoken-page.component';
import { ProvidingPageComponent } from './providing-page/providing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/guest', pathMatch: 'full' },
  { path: 'guest', component: GuestPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'mountaintoken-page', component: MountaintokenPageComponent },
  { path: 'providing', component: ProvidingPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditUserProfileComponent, canActivate: [AuthGuard] },
  { path: 'change-pass', component: ChangePassComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
  constructor() { }
}
