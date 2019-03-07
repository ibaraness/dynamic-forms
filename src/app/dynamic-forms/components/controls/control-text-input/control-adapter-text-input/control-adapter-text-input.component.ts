import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicControlOptions, DynamicFormsControlAdapter } from "src/app/dynamic-forms/models/dynamic-forms";

@Component({
  selector: "app-control-adapter-text-input",
  templateUrl: "./control-adapter-text-input.component.html",
  styleUrls: ["./control-adapter-text-input.component.css"]
})
export class ControlAdapterTextInputComponent implements DynamicFormsControlAdapter, OnInit {
  public form: FormGroup;
  public control: DynamicControlOptions;

  ngOnInit(): void {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
  }
}
