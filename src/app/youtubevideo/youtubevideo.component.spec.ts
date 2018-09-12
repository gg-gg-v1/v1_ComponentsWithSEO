import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubevideoComponent } from './youtubevideo.component';

describe('YoutubevideoComponent', () => {
  let component: YoutubevideoComponent;
  let fixture: ComponentFixture<YoutubevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
