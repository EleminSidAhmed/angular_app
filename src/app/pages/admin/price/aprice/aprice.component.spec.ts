import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApriceComponent } from './aprice.component';

describe('ApriceComponent', () => {
  let component: ApriceComponent;
  let fixture: ComponentFixture<ApriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApriceComponent]
    });
    fixture = TestBed.createComponent(ApriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
