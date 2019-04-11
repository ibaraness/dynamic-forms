import { CommonModule } from "@angular/common";
import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlAdapterTextInputComponent } from "../../components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { ControlTextInputComponent } from "../../components/controls/control-text-input/control-text-input.component";
import { DynamicFormsComponent } from "../../dynamic-forms.component";
import { DynamicControlOptions } from "../../models/dynamic-forms";
import { DynamicControlDirective } from "./dynamic-control.directive";

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

describe("DynamicControlDirective", () => {
  let fixture: ComponentFixture<ConatinerComponent>;
  let container: ConatinerComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ConatinerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatinerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(container).toBeTruthy();
  });
});
