import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserStatusComponent } from './header/user-status/user-status.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SongBookComponent } from './song-book/song-book.component';
import { SongListComponent } from './song-book/song-list/song-list.component';
import { SongComponent } from './song-book/song/song.component';
import { FormsModule } from '@angular/forms';
import { SongbookService } from './songbook.service';
import { LyricsComponent } from './song-book/song/lyrics/lyrics.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    UserStatusComponent,
    SongBookComponent,
    SongListComponent,
    SongComponent,
    LyricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdInputModule,
    SignInModule
  ],
  providers: [
    AuthService,
    SongbookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
