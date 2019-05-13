import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup } from "@angular/forms";
import { DynamicControlOptions } from "../../models/dynamic-forms";
import { DynamicFormValidationService } from "../../services/dynamic-form-validation.service";

@Component({
  selector: "app-container",
  template:
    "<div id='container' [form]='form' [control]='control' appDynamicControl></div>"
})
export class ConatinerComponent {
  public form: FormGroup;
  public control: DynamicControlOptions;
  createControl() {}
}

describe("DynamicControlDirective", () => {
  let fixture: ComponentFixture<ConatinerComponent>;
  let container: ConatinerComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ConatinerComponent],
      providers: [DynamicFormValidationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatinerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(container).toBeTruthy();
  });
});
