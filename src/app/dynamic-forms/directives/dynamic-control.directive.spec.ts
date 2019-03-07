import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DynamicControlDirective } from "./dynamic-control.directive";
import { Component, NgModule } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DynamicControlOptions } from "../models/dynamic-forms";
import { CommonModule } from "@angular/common";
import { ControlAdapterTextInputComponent } from "../components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { DynamicFormsComponent } from "../dynamic-forms.component";
import { ControlTextInputComponent } from "../components/controls/control-text-input/control-text-input.component";

@Component({
  selector: "container",
  template: "<div *ngIf='form && control' id='container' [form]='form' [control]='control' appDynamicControl></div>"
})
export class ConatinerComponent {
  public form: FormGroup;
  public control: DynamicControlOptions;
  createControl(){

  }
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    ControlAdapterTextInputComponent,
    DynamicControlDirective,
    DynamicFormsComponent,
    ControlTextInputComponent
  ],
  entryComponents: [ControlAdapterTextInputComponent],
  exports: [
    ControlAdapterTextInputComponent,
    DynamicControlDirective,
    DynamicFormsComponent
  ]
})
export class TestModule {}

describe("DynamicControlDirective", () => {
  let fixture: ComponentFixture<ConatinerComponent>;
  let container: ConatinerComponent;
  let element;
  let formGroup: FormGroup;
  let control: DynamicControlOptions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ConatinerComponent]
    });

    fixture = TestBed.createComponent(ConatinerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    control = {
      id: "control_id",
      type: "textbox"
    };

    formGroup = new FormGroup({
      [control.id]: new FormControl()
    });
    container.control = control;
    container.form = formGroup;
    fixture.detectChanges();
    setTimeout(()=>{
      console.log("element", element)
      //container.createControl();
    })

  });

  it("should create", () => {
    expect(container).toBeTruthy();
  });
});
