import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeedItemComponent } from 'src/app/features/feed-item/feed-item.component';
import { ErrorNotificationComponent } from 'src/app/features/error-notification/error-notification.component';
import { HomeComponent } from 'src/app/features/home/home.component';
import { FormatNumberPipe } from 'src/app/core/format-number.pipe';
import { PlaybuzzVideoComponent } from 'src/app/features/feed-item/playbuzz-video/playbuzz-video.component';
import { GenericVideoComponent } from 'src/app/features/feed-item/generic-video/generic-video.component';
import { VideoInIframeComponent } from 'src/app/features/feed-item/video-in-iframe/video-in-iframe.component';
import { LoadOnScrollDirective } from 'src/app/core/load-on-scroll.directive';
import { PlaybuzzDirective } from 'src/app/core/playbuzz.directive';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
