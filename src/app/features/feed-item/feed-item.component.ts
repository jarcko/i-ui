import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FeedItem } from 'src/app/core/interfaces';

@Component({
  selector: 'feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input() item: FeedItem;

  constructor(private cdr: ChangeDetectorRef) { }

  dataError: boolean;

  defineSource(source: string): string {
    return ['facebook', 'youtube'].includes(source) && source;
  }

  onDataError(): void {
    this.dataError = true;
    this.cdr.detectChanges();
  }
}
