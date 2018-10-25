import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidingPageComponent } from './providing-page.component';

describe('ProvidingPageComponent', () => {
  let component: ProvidingPageComponent;
  let fixture: ComponentFixture<ProvidingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
