import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { DynamicControlOptions, DynamicFormsControl } from "../../../models/dynamic-forms";
import * as _ from "lodash";

@Component({
  selector: "app-control-text-input",
  templateUrl: "./control-text-input.component.html",
  styleUrls: ["./control-text-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControlTextInputComponent,
      multi: true
    }
  ]
})
export class ControlTextInputComponent implements OnInit, DynamicFormsControl {
  @Input() control: DynamicControlOptions;

  public inputValue: string;
  public disabled: boolean;
  public inputType: string;

  onChange: (value: string) => void;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.inputType = _.property("options.input_type")(this.control) || "text";
    console.log("control", _);
  }

  onInput(value) {
    if (this.onChange) {
      this.onChange(value);
    }
  }

  writeValue(value: string): void {
    this.inputValue = value;
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Not implemented
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }
}
