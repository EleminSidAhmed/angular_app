import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcarpetComponent } from './ucarpet.component';

describe('UcarpetComponent', () => {
  let component: UcarpetComponent;
  let fixture: ComponentFixture<UcarpetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcarpetComponent]
    });
    fixture = TestBed.createComponent(UcarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
