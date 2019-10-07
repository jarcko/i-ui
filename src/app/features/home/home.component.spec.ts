import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FeedItemComponent } from 'src/app/features/feed-item/feed-item.component';
import { DeviceService } from 'src/app/core/device.service';
import { FeedService } from 'src/app/core/feed.service';
import { ErrorNotificationComponent } from 'src/app/features/error-notification/error-notification.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormatNumberPipe } from 'src/app/core/format-number.pipe';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FeedItemComponent,
        ErrorNotificationComponent,
        FormatNumberPipe,
      ],
      providers: [
        DeviceService,
        FeedService,
        { provide: ActivatedRoute,
          useValue: {
            data: of([
              {
                title: 'Playbuzz Embed!',
                type: 'video',
                source: 'playbuzz',
                videoId: 'fde413bc-ce0c-40fc-8661-bedca85021ec',
                views: 14569666,
              },
            ]),
          }},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
