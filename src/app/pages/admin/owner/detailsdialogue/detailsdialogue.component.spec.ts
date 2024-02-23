import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdialogueComponent } from './detailsdialogue.component';

describe('DetailsdialogueComponent', () => {
  let component: DetailsdialogueComponent;
  let fixture: ComponentFixture<DetailsdialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsdialogueComponent]
    });
    fixture = TestBed.createComponent(DetailsdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
