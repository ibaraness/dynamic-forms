import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DynamicControlOptions, DynamicFormsControlGroup } from "./models/dynamic-forms";
import { getContrtolsFromGroups } from "./utils/utils";

@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  styleUrls: ["./dynamic-forms.component.css"]
})
export class DynamicFormsComponent implements OnInit {
  @Input() controlGroups: DynamicFormsControlGroup[];
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  public form: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    const controlsObj = {};
    const controls = this.controlGroups && getContrtolsFromGroups(this.controlGroups) || [];
    controls.forEach(control => {
      controlsObj[control.id] = new FormControl();
    });
    this.form = new FormGroup(controlsObj);
    this.formReady.emit(this.form);
  }
}
