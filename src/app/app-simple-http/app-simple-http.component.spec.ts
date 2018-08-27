import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSimpleHttpComponent } from './app-simple-http.component';

describe('AppSimpleHttpComponent', () => {
  let component: AppSimpleHttpComponent;
  let fixture: ComponentFixture<AppSimpleHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSimpleHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSimpleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
