import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeListingComponent } from './cafe-listing.component';

describe('CafeListingComponent', () => {
  let component: CafeListingComponent;
  let fixture: ComponentFixture<CafeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
