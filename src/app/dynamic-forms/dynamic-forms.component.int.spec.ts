import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DynamicFormsComponent } from "./dynamic-forms.component";
import { DynamicControlDirective } from "./directives/dynamic-control/dynamic-control.directive";
import { ControlAdapterTextInputComponent } from "./components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ControlTextInputComponent } from "./components/controls/control-text-input/control-text-input.component";
import { DynamicFormsControlGroup } from "./models/dynamic-forms";

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

describe("DynamicFormsComponent Int", () => {
  let component: DynamicFormsComponent;
  let fixture: ComponentFixture<DynamicFormsComponent>;
  let controlGroups: DynamicFormsControlGroup[];
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    controlGroups = [{
      controls: [{
        id: "first_name",
        type: "textbox",
        title: "First Name"
      }]
    }];
    component.controlGroups = controlGroups;
    fixture.detectChanges();
  });

  it("should create dynamic element ControlAdapterTextInputComponent", () => {
    expect(element.querySelector("app-control-adapter-text-input")).toBeTruthy();
  });
});
