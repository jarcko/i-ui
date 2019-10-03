import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'generic-video',
  templateUrl: './generic-video.component.html',
  styleUrls: ['./generic-video.component.scss'],
})
export class GenericVideoComponent implements OnInit {
  @Input() srcUrl: string;
  @Output() dataError = new EventEmitter();

  ngOnInit() {
    if (!this.srcUrl) {
      this.dataError.emit();
    }
  }
}
