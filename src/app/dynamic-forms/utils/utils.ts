import { DynamicFormsControlGroup, DynamicControlOptions } from "../models/dynamic-forms";

export const getContrtolsFromGroups = (controlGroups: DynamicFormsControlGroup[]): DynamicControlOptions[] => {
  let controls: DynamicControlOptions[] = [];
  controlGroups.forEach(controlGroup => {
    controls = controls.concat(controlGroup.controls || []);
    controls = controls.concat(controlGroup.groups && getContrtolsFromGroups(controlGroup.groups) || []);
  });
  return controls;
};
