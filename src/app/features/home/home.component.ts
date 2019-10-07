import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FeedItem } from 'src/app/core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FeedService } from 'src/app/core/feed.service';
import { DeviceService } from 'src/app/core/device.service';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  feedItems: FeedItem[];
  isAllContentLoaded: boolean;
  error$: Observable<Error>;
  unsubscribe$ = new Subject<void>();
  videoItemMinHeight: number;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceService,
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(
      takeUntil(this.unsubscribe$),
      map(({ resolved }) => resolved),
    )
      .subscribe(items => this.feedItems = items);
    this.error$ = this.feedService.error$;
    this.videoItemMinHeight = this.deviceService.isMobile()
      ? this.deviceService.mobileMinHeight
      : this.deviceService.desktopMinHeight;
  }

  onLoadMore(): void {
    if (!this.isAllContentLoaded) {
      const index = this.feedItems.length.toString();
      const quantity = this.deviceService.itemsQty.toString();
      this.feedService.fetchFeedItems(index, quantity).pipe(takeUntil(this.unsubscribe$))
        .subscribe(items => {
          this.feedItems = [...this.feedItems, ...items];
          this.isAllContentLoaded = !items.length;
          this.cdr.detectChanges();
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
