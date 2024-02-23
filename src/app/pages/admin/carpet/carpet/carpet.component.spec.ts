import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetComponent } from './carpet.component';

describe('CarpetComponent', () => {
  let component: CarpetComponent;
  let fixture: ComponentFixture<CarpetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarpetComponent]
    });
    fixture = TestBed.createComponent(CarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
