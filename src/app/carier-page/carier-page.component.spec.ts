import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarierPageComponent } from './carier-page.component';

describe('CarierPageComponent', () => {
  let component: CarierPageComponent;
  let fixture: ComponentFixture<CarierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
