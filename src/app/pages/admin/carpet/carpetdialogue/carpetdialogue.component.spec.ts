import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetdialogueComponent } from './carpetdialogue.component';

describe('CarpetdialogueComponent', () => {
  let component: CarpetdialogueComponent;
  let fixture: ComponentFixture<CarpetdialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarpetdialogueComponent]
    });
    fixture = TestBed.createComponent(CarpetdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
