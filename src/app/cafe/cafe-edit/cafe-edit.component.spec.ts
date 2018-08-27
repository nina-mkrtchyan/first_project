import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeEditComponent } from './cafe-edit.component';

describe('CafeEditComponent', () => {
  let component: CafeEditComponent;
  let fixture: ComponentFixture<CafeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
