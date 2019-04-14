import { Validators } from "@angular/forms";
import { only_letters, password } from "../constants/validations";
import { ValidationMap } from "../models/dynamic-forms";

export const validationConfig: ValidationMap = {
  required: () => Validators.required,
  minlength: Validators.minLength,
  only_letters,
  password,
  email: () => Validators.email
};
