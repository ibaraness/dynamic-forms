import { AbstractControl } from "@angular/forms";

const customRegExpValidatorFN = (patt, returnKey) => {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = !patt.test(control.value);
    console.log("validation", patt, patt.test(control.value), control.value);
    return forbidden ? {[returnKey]: {value: control.value}} : null;
  };
};

export const password = () => {
  const patt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).*$/;
  return customRegExpValidatorFN(patt, "password");
};

export const only_letters = () => {
  const patt = /^[a-zA-Z]*$/;
  return customRegExpValidatorFN(patt, "only_letters");
};


