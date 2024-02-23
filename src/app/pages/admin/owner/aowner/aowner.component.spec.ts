import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AownerComponent } from './aowner.component';

describe('AownerComponent', () => {
  let component: AownerComponent;
  let fixture: ComponentFixture<AownerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AownerComponent]
    });
    fixture = TestBed.createComponent(AownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
