import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Providers } from 'src/app/core/interfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-in-iframe',
  templateUrl: './video-in-iframe.component.html',
  styleUrls: ['./video-in-iframe.component.scss'],
})
export class VideoInIframeComponent implements OnInit {
  @Input() videoId: string;
  @Input() provider: string;
  @Output() dataError = new EventEmitter();

  providers: Providers;
  safeSourceUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.videoId) {
      this.dataError.emit();
      return;
    }

    this.providers = {
      facebook: () =>
        `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsav.liotta%2Fvideos%2F${this.videoId}%2F`,
      youtube: () => `https://www.youtube.com/embed/${this.videoId}`,
    };

    const sourceUrl = this.providers[this.provider]();
    this.safeSourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(sourceUrl);
  }
}
