import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlAdapterTextInputComponent } from "../../components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { ControlTextInputComponent } from "../../components/controls/control-text-input/control-text-input.component";
import { DynamicFormsComponent } from "../../dynamic-forms.component";
import { DynamicControlDirective } from "./dynamic-control.directive";

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
