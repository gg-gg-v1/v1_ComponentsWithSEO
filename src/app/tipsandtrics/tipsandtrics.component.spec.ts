import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsandtricsComponent } from './tipsandtrics.component';

describe('TipsandtricsComponent', () => {
  let component: TipsandtricsComponent;
  let fixture: ComponentFixture<TipsandtricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsandtricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsandtricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
