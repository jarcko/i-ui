import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInIframeComponent } from './video-in-iframe.component';

describe('VideoInIframeComponent', () => {
  let component: VideoInIframeComponent;
  let fixture: ComponentFixture<VideoInIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoInIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
