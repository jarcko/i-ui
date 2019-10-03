import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericVideoComponent } from './generic-video.component';

describe('GenericVideoComponent', () => {
  let component: GenericVideoComponent;
  let fixture: ComponentFixture<GenericVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
