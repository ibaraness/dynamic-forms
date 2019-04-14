import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import {
  DynamicControlOptions,
  DynamicFormsControlAdapter
} from "src/app/dynamic-forms/models/dynamic-forms";
import { DynamicFormValidationService } from "src/app/dynamic-forms/services/dynamic-form-validation.service";

@Component({
  selector: "app-control-adapter-text-input",
  templateUrl: "./control-adapter-text-input.component.html",
  styleUrls: ["./control-adapter-text-input.component.css"]
})
export class ControlAdapterTextInputComponent
  implements DynamicFormsControlAdapter, OnInit {
  public form: FormGroup;
  public control: DynamicControlOptions;
  public invalid: boolean;
  public errorMessage: string;
  public touched: boolean;

  constructor(private validationService: DynamicFormValidationService){}

  ngOnInit(): void {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
  }

  validate() {
    const formControl: AbstractControl = this.form.controls[this.control.id];
    this.touched = formControl.dirty;
    if (this.touched && !formControl.valid) {
      this.errorMessage = this.validationService.getErrorMessages(formControl, this.control.validations);
      this.invalid = true;
      return;
    }
    this.invalid = false;
  }

  onInput(input) {
    if (this.touched) {
      this.validate();
    }
  }
}
