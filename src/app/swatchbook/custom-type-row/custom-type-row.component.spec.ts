import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTypeRowComponent } from './custom-type-row.component';

describe('CustomTypeRowComponent', () => {
  let component: CustomTypeRowComponent;
  let fixture: ComponentFixture<CustomTypeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTypeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTypeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
