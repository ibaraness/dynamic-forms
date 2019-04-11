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
        },
        {
          id: "last_name",
          title: "Last Name",
          type: "textbox"
        },
        {
          id: "email",
          title: "Email",
          type: "textbox",
          options: {
            input_type: "email"
          }
        },
        {
          id: "password",
          title: "Password",
          type: "textbox",
          options: {
            input_type: "password"
          }
        },
        {
          id: "submit",
          title: "Submit",
          type: "submit",
        }
      ]
    }
  ];
}
