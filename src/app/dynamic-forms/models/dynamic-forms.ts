import { ControlValueAccessor, FormGroup, ValidatorFn } from "@angular/forms";

export interface DynamicFormsControl extends ControlValueAccessor {
  onChange: (value: any) => void;
  control: DynamicControlOptions;
}

export interface Validation {
  validation: string;
  errorMessage: string;
}

export interface DynamicControlOptions {
  id: string;
  title?: string;
  html?: string;
  defaultValue?: any;
  type: string;
  tags?: string[];
  options?: { [optionName: string]: string };
  validations?: Validation[];
}

export interface DynamicFormsControlAdapter {
  control: DynamicControlOptions;
  form: FormGroup;
  validate(): void;
}

export interface DynamicFormsControlGroup {
  controls?: DynamicControlOptions[];
  groups?: DynamicFormsControlGroup[];
  tags?: string[];
}


export interface ValidationMap {
  [name: string]: Function;
}

export interface FormValues {
  [name: string]: any;
}

export interface ControlValidationEvent {
  error: boolean;
  errorMessage: string;
}
