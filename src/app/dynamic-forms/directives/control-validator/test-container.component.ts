import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicControlOptions } from "../../models/dynamic-forms";

@Component({
  selector: "app-container",
  template:
    "<div id='container' [form]='form' [control]='control' appControlValidator></div>"
})
export class TestConatinerComponent {
  public form: FormGroup;
  public control: DynamicControlOptions;
  onStatusChange(){
    //TODO: Add action
  }
}
