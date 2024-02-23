import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDangerComponent } from './msg-danger.component';

describe('MsgDangerComponent', () => {
  let component: MsgDangerComponent;
  let fixture: ComponentFixture<MsgDangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgDangerComponent]
    });
    fixture = TestBed.createComponent(MsgDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
