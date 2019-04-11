import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicControlOptions } from "../../models/dynamic-forms";

@Component({
  selector: "app-container",
  template:
    "<div id='container' [form]='form' [control]='control' appDynamicControl></div>"
})
export class ConatinerComponent {
  public form: FormGroup;
  public control: DynamicControlOptions;
  createControl() {}
}
