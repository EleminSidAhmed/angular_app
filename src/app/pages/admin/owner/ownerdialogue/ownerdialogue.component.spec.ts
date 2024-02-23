import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerdialogueComponent } from './ownerdialogue.component';

describe('OwnerdialogueComponent', () => {
  let component: OwnerdialogueComponent;
  let fixture: ComponentFixture<OwnerdialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerdialogueComponent]
    });
    fixture = TestBed.createComponent(OwnerdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
