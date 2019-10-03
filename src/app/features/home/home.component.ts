import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedItem } from 'src/app/core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FeedService } from 'src/app/core/feed.service';
import { DeviceService } from 'src/app/core/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  feedItems: FeedItem[];
  isAllContentLoaded: boolean;
  error$: Observable<Error>;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceService,
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(map(({ resolved }) => resolved))
      .subscribe(items => this.feedItems = items);
    this.error$ = this.feedService.error$;
  }

  onLoadMore(): void {
    if (!this.isAllContentLoaded) {
      const index = this.feedItems.length.toString();
      this.feedService.fetchFeedItems(index, this.deviceService.itemsQty.toString())
        .subscribe(items => {
          this.feedItems = [...this.feedItems, ...items];
          this.isAllContentLoaded = !items.length;
          this.cdr.detectChanges();
        });
    }

  }
}
