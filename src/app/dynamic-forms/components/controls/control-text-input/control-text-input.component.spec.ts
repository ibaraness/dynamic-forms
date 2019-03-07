import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTextInputComponent } from './control-text-input.component';

describe('ControlTextInputComponent', () => {
  let component: ControlTextInputComponent;
  let fixture: ComponentFixture<ControlTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
