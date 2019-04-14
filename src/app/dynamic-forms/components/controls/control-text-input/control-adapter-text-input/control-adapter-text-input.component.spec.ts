import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DynamicControlOptions } from "src/app/dynamic-forms/models/dynamic-forms";
import { ControlAdapterTextInputComponent } from "./control-adapter-text-input.component";


describe("ControlAdapterTextInputComponent", () => {
  let component: ControlAdapterTextInputComponent;
  let fixture: ComponentFixture<ControlAdapterTextInputComponent>;
  let formGroup: FormGroup;
  let control: DynamicControlOptions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ControlAdapterTextInputComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAdapterTextInputComponent);
    component = fixture.componentInstance;

    control = {
      id: "control_id",
      type: "textbox",
      validations: [
        {
          type: "required",
          errorMessage: "You must enter first name"
        }
      ]
    };

    formGroup = new FormGroup({
      [control.id]: new FormControl(undefined, [Validators.required])
    });


  });

  it("should create when has a valid form and control", () => {
    component.form = formGroup;
    component.control = control;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should fail with an error without a valid form", () => {
    const test = () => {
      component.form = undefined;
      fixture.detectChanges();
    };
    expect(test).toThrowError();
  });

  it("should fail with template error without a valid control", () => {
    const test = () => {
      component.form = formGroup;
      fixture.detectChanges();
    };
    expect(test).toThrowError();
  });

  it("should update when control is dirty", () => {

  })

});

