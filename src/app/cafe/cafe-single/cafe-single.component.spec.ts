import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeSingleComponent } from './cafe-single.component';

describe('CafeSingleComponent', () => {
  let component: CafeSingleComponent;
  let fixture: ComponentFixture<CafeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
