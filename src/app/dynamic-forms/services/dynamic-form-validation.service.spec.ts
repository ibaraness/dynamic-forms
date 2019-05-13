import { TestBed } from "@angular/core/testing";

import { DynamicFormValidationService } from "./dynamic-form-validation.service";

describe("DynamicFormValidationService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DynamicFormValidationService]
  }));

  it("should be created", () => {
    const service: DynamicFormValidationService = TestBed.get(DynamicFormValidationService);
    expect(service).toBeTruthy();
  });
});
