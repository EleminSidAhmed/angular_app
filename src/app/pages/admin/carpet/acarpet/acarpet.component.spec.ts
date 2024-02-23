import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcarpetComponent } from './acarpet.component';

describe('AcarpetComponent', () => {
  let component: AcarpetComponent;
  let fixture: ComponentFixture<AcarpetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcarpetComponent]
    });
    fixture = TestBed.createComponent(AcarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
