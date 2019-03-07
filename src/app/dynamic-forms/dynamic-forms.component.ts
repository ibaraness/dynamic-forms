import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DynamicControlOptions, DynamicFormsControlGroup } from "./models/dynamic-forms";

@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  styleUrls: ["./dynamic-forms.component.css"]
})
export class DynamicFormsComponent implements OnInit {
  @Input() controlGroups: DynamicFormsControlGroup[];
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  public form: FormGroup;
  // public control: DynamicControlOptions = {
  //   id: "first_name",
  //   title: "First Name",
  //   type: "textbox"
  // };
  constructor() {}

  ngOnInit() {
    const controls = {
      text1: new FormControl(),
      first_name: new FormControl("idan")
    };
    this.form = new FormGroup(controls);
    this.formReady.emit(this.form);
    // this.form.valueChanges.subscribe(values => {
    //   console.log("values", values);
    // });
  }
}
