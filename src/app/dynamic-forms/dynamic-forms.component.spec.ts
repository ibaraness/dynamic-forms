import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DynamicFormsComponent } from "./dynamic-forms.component";

describe("DynamicFormsComponent", () => {
  let component: DynamicFormsComponent;
  let fixture: ComponentFixture<DynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create dynamic form", () => {
    expect(component.form).toBeTruthy();
  });

  it("should emit formReady when form is ready", () => {
    spyOn(component.formReady, "emit");
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.formReady.emit).toHaveBeenCalled();
  });
});
