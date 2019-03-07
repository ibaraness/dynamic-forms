import { Component } from "@angular/core";
import { DynamicFormsControlGroup } from "./dynamic-forms/models/dynamic-forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  public controlGroups: DynamicFormsControlGroup[] = [
    {
      controls: [
        {
          id: "first_name",
          title: "First Name",
          type: "textbox"
        }
      ]
    }
  ];
}
