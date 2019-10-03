import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybuzzVideoComponent } from './playbuzz-video.component';

describe('PlaybuzzVideoComponent', () => {
  let component: PlaybuzzVideoComponent;
  let fixture: ComponentFixture<PlaybuzzVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybuzzVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybuzzVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
