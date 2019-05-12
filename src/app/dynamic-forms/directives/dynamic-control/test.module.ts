import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlAdapterTextInputComponent } from "../../components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { ControlTextInputComponent } from "../../components/controls/control-text-input/control-text-input.component";
import { DynamicFormsComponent } from "../../dynamic-forms.component";
import { DynamicFormValidationService } from "../../services/dynamic-form-validation.service";
import { DynamicControlDirective } from "./dynamic-control.directive";
import { DynamicFormsModule } from "../../dynamic-forms.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicFormsModule],
  entryComponents: [ControlAdapterTextInputComponent],
  providers: [DynamicFormValidationService]
})
export class TestModule {}
