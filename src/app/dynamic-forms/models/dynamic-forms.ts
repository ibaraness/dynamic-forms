
import { ControlValueAccessor, FormGroup } from "@angular/forms";

export interface DynamicFormsControl extends ControlValueAccessor {
  onChange: (value: any) => void;
  control: DynamicControlOptions;
}

export interface DynamicControlOptions {
  id: string;
  title?: string;
  defaultValue?: any;
  type: string;
  tags?: string[];
  options?: {[optionName: string]: string};
}

export interface DynamicFormsControlAdapter {
  control: DynamicControlOptions;
  form: FormGroup;
}

export interface DynamicFormsControlGroup {
  controls?: DynamicControlOptions[];
  groups?: DynamicFormsControlGroup[];
  tags?: string[];
}
