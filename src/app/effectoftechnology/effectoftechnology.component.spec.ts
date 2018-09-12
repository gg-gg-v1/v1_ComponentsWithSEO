import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectoftechnologyComponent } from './effectoftechnology.component';

describe('EffectoftechnologyComponent', () => {
  let component: EffectoftechnologyComponent;
  let fixture: ComponentFixture<EffectoftechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectoftechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectoftechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
