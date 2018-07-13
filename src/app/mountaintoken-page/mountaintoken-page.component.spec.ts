import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountaintokenPageComponent } from './mountaintoken-page.component';

describe('MountaintokenPageComponent', () => {
  let component: MountaintokenPageComponent;
  let fixture: ComponentFixture<MountaintokenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountaintokenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountaintokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
