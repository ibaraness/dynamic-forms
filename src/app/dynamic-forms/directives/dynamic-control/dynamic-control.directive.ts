import {
  ComponentFactoryResolver,
  Directive,
  Input,
  Type,
  ViewContainerRef,
  OnInit
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicControlOptions } from "src/app/dynamic-forms/models/dynamic-forms";
import { DynamicFormsControlAdapter } from "../../models/dynamic-forms";
import { dynamicControlAdapters } from "../../config/dynamic-control-adapters.config";

@Directive({
  selector: "[appDynamicControl]"
})
export class DynamicControlDirective implements OnInit {
  @Input() form: FormGroup;
  @Input() control: DynamicControlOptions;

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    console.log("form", this.form);
    this.createControl();
  }

  createControl() {
    if (!this.viewContainer || !this.control || !dynamicControlAdapters[this.control.type]) {
      return;
    }
    this.viewContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      dynamicControlAdapters[this.control.type] as Type<
        DynamicFormsControlAdapter
      >
    );
    const componentRef = this.viewContainer.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.form = this.form;
  }
}
