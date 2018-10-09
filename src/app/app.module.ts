import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';

import { GuestPageComponent } from './guest-page/guest-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { MntApiService } from './mnt-api.service';
import { AuthService } from './auth.service';

import { AuthInterceptor } from './auth-interceptor';

import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MountaintokenPageComponent } from './mountaintoken-page/mountaintoken-page.component';
import { GalleryCarierComponent } from './gallery-carier/gallery-carier.component';
import { GalleryCarierTopComponent } from './gallery-carier-top/gallery-carier-top.component';

export function gettoken() {
  return localStorage.getItem('id_token');
}
const jwtConf: JwtModuleOptions = {
  config: {
    tokenGetter: gettoken,
    whitelistedDomains: ['lockalhost:3000']
  }
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuestPageComponent,
    SignupPageComponent,
    PageNotFoundComponent,
    GalleryCarouselComponent,
    FooterComponent,
    LoginPageComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    ChangePassComponent,
    AboutUsComponent,
    MountaintokenPageComponent,
    GalleryCarierComponent,
    GalleryCarierTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickModule.forRoot(),
    JwtModule.forRoot(jwtConf)
  ],
  providers: [
    MntApiService,
    AuthService,
    AuthGuardService,
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
