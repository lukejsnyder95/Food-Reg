import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiyVerifyComponent } from './identiy-verify.component';

describe('IdentiyVerifyComponent', () => {
  let component: IdentiyVerifyComponent;
  let fixture: ComponentFixture<IdentiyVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentiyVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiyVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
