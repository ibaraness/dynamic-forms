import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ControlValidatorDirective } from "src/app/dynamic-forms/directives/control-validator/control-validator.directive";
import { ControlValidationEvent, DynamicControlOptions, DynamicFormsControlAdapter } from "src/app/dynamic-forms/models/dynamic-forms";

@Component({
  selector: "app-control-adapter-text-input",
  templateUrl: "./control-adapter-text-input.component.html",
  styleUrls: ["./control-adapter-text-input.component.css"]
})
export class ControlAdapterTextInputComponent
  implements DynamicFormsControlAdapter, OnInit {
  @ViewChild(ControlValidatorDirective) controlValidator;
  public form: FormGroup;
  public control: DynamicControlOptions;
  public invalid: boolean;
  public errorMessage: string;
  public required: boolean;

  ngOnInit(): void {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
  }

  validate() {
    this.controlValidator.validate();
  }

  onStatusChange(event: ControlValidationEvent) {
    this.errorMessage = event.errorMessage;
    this.invalid = event.error;
  }
}
