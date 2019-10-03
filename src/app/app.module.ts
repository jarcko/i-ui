import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedItemComponent } from './features/feed-item/feed-item.component';
import { ErrorNotificationComponent } from './features/error-notification/error-notification.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from 'src/app/core/format-number.pipe';
import { PlaybuzzVideoComponent } from './features/feed-item/playbuzz-video/playbuzz-video.component';
import { GenericVideoComponent } from './features/feed-item/generic-video/generic-video.component';
import { VideoInIframeComponent } from './features/feed-item/video-in-iframe/video-in-iframe.component';
import { LoadOnScrollDirective } from './core/load-on-scroll.directive';
import { PlaybuzzDirective } from './core/playbuzz.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeedItemComponent,
    ErrorNotificationComponent,
    HomeComponent,
    FormatNumberPipe,
    PlaybuzzVideoComponent,
    GenericVideoComponent,
    VideoInIframeComponent,
    LoadOnScrollDirective,
    PlaybuzzDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
