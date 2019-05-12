import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DynamicControlOptions, DynamicFormsControlGroup, FormValues } from "./models/dynamic-forms";
import { getContrtolsFromGroups } from "./utils/utils";
import { DynamicFormValidationService } from "./services/dynamic-form-validation.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  styleUrls: ["./dynamic-forms.component.css"]
})
export class DynamicFormsComponent implements OnInit {
  @Input() controlGroups: DynamicFormsControlGroup[];
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  public submit$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public form: FormGroup;

  constructor(private validationService: DynamicFormValidationService) { }

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

  private markAllAsDirty(): void {
    Object.values(this.form.controls).forEach(control => {
      control.markAsDirty();
    });
  }

  getFormData(): FormValues {
    this.markAllAsDirty();
    this.submit$.next(true);
    if (this.form && this.form.valid) {
      return this.form.value;
    }
    return null;
  }
}
