import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ControlAdapterTextInputComponent } from "./control-adapter-text-input.component";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from "@angular/forms";
import { ControlTextInputComponent } from "../control-text-input.component";
import { DynamicControlOptions } from "src/app/dynamic-forms/models/dynamic-forms";

describe("ControlAdapterTextInputComponent", () => {
  let component: ControlAdapterTextInputComponent;
  let fixture: ComponentFixture<ControlAdapterTextInputComponent>;
  let formGroup: FormGroup;
  let control: DynamicControlOptions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [
        ControlTextInputComponent,
        ControlAdapterTextInputComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAdapterTextInputComponent);
    component = fixture.componentInstance;

    control = {
      id: "control_id",
      type: "textbox"
    };

    formGroup = new FormGroup({
      [control.id]: new FormControl()
    });

    component.form = formGroup;
    component.control = control;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should not be created without form", () => {
    component.form = undefined;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});

