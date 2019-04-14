import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DynamicControlOptions, DynamicFormsControlGroup } from "./models/dynamic-forms";
import { getContrtolsFromGroups } from "./utils/utils";
import { DynamicFormValidationService } from "./services/dynamic-form-validation.service";

@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  styleUrls: ["./dynamic-forms.component.css"]
})
export class DynamicFormsComponent implements OnInit {
  @Input() controlGroups: DynamicFormsControlGroup[];
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  public form: FormGroup;

  constructor(private validationService: DynamicFormValidationService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    const controlsObj = {};
    const controls = this.controlGroups && getContrtolsFromGroups(this.controlGroups) || [];
    controls.forEach(control => {
      const validators = !control.validations ? [] :
        control.validations.map(obj => this.validationService.getValidator(obj.validation))
        .filter(v => v);
      controlsObj[control.id] = new FormControl(undefined, validators);
    });
    this.form = new FormGroup(controlsObj);
    this.formReady.emit(this.form);
  }
}
