import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSwatchTagsComponent } from './manage-swatch-tags.component';

describe('ManageSwatchTagsComponent', () => {
  let component: ManageSwatchTagsComponent;
  let fixture: ComponentFixture<ManageSwatchTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSwatchTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSwatchTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
