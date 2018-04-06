import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';

import { GuestPageComponent } from './guest-page/guest-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module';
import { MntApiService } from './mnt-api.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuestPageComponent,
    SignupPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    UsersComponent,
    GalleryCarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickModule.forRoot()
  ],
  providers: [MntApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
