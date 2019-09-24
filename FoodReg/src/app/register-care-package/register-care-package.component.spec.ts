import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarePackageComponent } from './register-care-package.component';

describe('RegisterCarePackageComponent', () => {
  let component: RegisterCarePackageComponent;
  let fixture: ComponentFixture<RegisterCarePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCarePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
