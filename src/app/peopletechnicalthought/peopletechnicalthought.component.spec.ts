import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopletechnicalthoughtComponent } from './peopletechnicalthought.component';

describe('PeopletechnicalthoughtComponent', () => {
  let component: PeopletechnicalthoughtComponent;
  let fixture: ComponentFixture<PeopletechnicalthoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopletechnicalthoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopletechnicalthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
