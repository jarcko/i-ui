import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedItemComponent } from './feed-item.component';
import { MatIconModule } from '@angular/material';
import { VideoInIframeComponent } from 'src/app/features/feed-item/video-in-iframe/video-in-iframe.component';
import { PlaybuzzVideoComponent } from 'src/app/features/feed-item/playbuzz-video/playbuzz-video.component';
import { GenericVideoComponent } from 'src/app/features/feed-item/generic-video/generic-video.component';
import { FormatNumberPipe } from 'src/app/core/format-number.pipe';

describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedItemComponent,
        VideoInIframeComponent,
        PlaybuzzVideoComponent,
        GenericVideoComponent,
        FormatNumberPipe,
      ],
      imports: [MatIconModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.item = {
      title: 'Playbuzz Embed!',
      type: 'video',
      source: 'playbuzz',
      videoId: 'fde413bc-ce0c-40fc-8661-bedca85021ec',
      views: 14569666,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
