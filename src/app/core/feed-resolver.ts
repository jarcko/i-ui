import { Injectable } from '@angular/core';
import { FeedService } from 'src/app/core/feed.service';
import { Observable, of } from 'rxjs';
import { FeedItem } from 'src/app/core/interfaces';
import { catchError, take } from 'rxjs/operators';
import { DeviceService } from 'src/app/core/device.service';

@Injectable({
  providedIn: 'root',
})
export class FeedResolver {

  constructor(
    private feedService: FeedService,
    private deviceService: DeviceService,
  ) { }

  resolve(): Observable<FeedItem[] | {}> {
    return this.feedService.fetchFeedItems('0', this.deviceService.itemsQty.toString())
      .pipe(
        take(1),
        catchError(err => {
          this.feedService.handleError(err.error);
          return of({});
        }),
      );
  }
}
