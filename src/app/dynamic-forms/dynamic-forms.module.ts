import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlAdapterTextInputComponent } from "./components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { ControlTextInputComponent } from "./components/controls/control-text-input/control-text-input.component";
import { DynamicControlDirective } from './directives/dynamic-control/dynamic-control.directive';
import { DynamicFormsComponent } from "./dynamic-forms.component";

@NgModule({
  declarations: [
    DynamicFormsComponent,
    ControlTextInputComponent,
    ControlAdapterTextInputComponent,
    DynamicControlDirective
  ],
  exports: [DynamicFormsComponent],
  entryComponents: [ControlAdapterTextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class DynamicFormsModule {}
