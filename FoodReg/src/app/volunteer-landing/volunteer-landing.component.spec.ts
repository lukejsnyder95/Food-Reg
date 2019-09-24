import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerLandingComponent } from './volunteer-landing.component';

describe('VolunteerLandingComponent', () => {
  let component: VolunteerLandingComponent;
  let fixture: ComponentFixture<VolunteerLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
