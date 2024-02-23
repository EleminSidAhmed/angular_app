import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmComponent } from './hm.component';

describe('HmComponent', () => {
  let component: HmComponent;
  let fixture: ComponentFixture<HmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmComponent]
    });
    fixture = TestBed.createComponent(HmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
