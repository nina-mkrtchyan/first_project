import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatchTagComponent } from './swatch-tag.component';

describe('SwatchTagComponent', () => {
  let component: SwatchTagComponent;
  let fixture: ComponentFixture<SwatchTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwatchTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwatchTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
