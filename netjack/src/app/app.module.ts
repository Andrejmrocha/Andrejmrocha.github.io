import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardSongComponent } from './components/card-song/card-song.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostSongComponent } from './components/post-song/post-song.component';
import { ScrollingComponent } from './components/scrolling/scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DetailTrackComponent } from './pages/detail-track/detail-track.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardSongComponent,
    PostSongComponent,
    ScrollingComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    PostPageComponent,
    DetailTrackComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ScrollingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRippleModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
