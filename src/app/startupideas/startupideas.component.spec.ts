import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupideasComponent } from './startupideas.component';

describe('StartupideasComponent', () => {
  let component: StartupideasComponent;
  let fixture: ComponentFixture<StartupideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
