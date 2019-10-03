import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'playbuzz-video',
  templateUrl: './playbuzz-video.component.html',
  styleUrls: ['./playbuzz-video.component.scss'],
})
export class PlaybuzzVideoComponent implements OnInit, AfterViewInit {
  @Input() videoId: string;
  @Output() dataError = new EventEmitter();
  @ViewChild('playbuzz') playbuzzContainer: ElementRef;

  ngOnInit() {
    if (!this.videoId) {
      this.dataError.emit();
    }
  }

  ngAfterViewInit() {
    if (!this.videoId) {
      return;
    }

    this.playbuzzContainer.nativeElement.setAttribute('data-id', this.videoId);
  }

}
