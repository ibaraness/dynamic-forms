import { Component, ViewChild } from "@angular/core";
import { DynamicFormsComponent } from "./dynamic-forms/dynamic-forms.component";
import { DynamicFormsControlGroup } from "./dynamic-forms/models/dynamic-forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  @ViewChild("dynamicForms") dynamicForms: DynamicFormsComponent;

  public controlGroups: DynamicFormsControlGroup[] = [
    {
      controls: [
        {
          id: "first_name",
          title: "First Name",
          type: "textbox",
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "minlength-3",
              errorMessage: "You must enter at least 3 letters"
            },
            {
              validation: "only_letters",
              errorMessage: "you must use only letters, spaces and other characters are not alowed"
            }
          ]
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
          },
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "email",
              errorMessage: "Please enter a valid email address"
            }
          ]
        },
        {
          id: "password",
          title: "Password",
          type: "textbox",
          options: {
            input_type: "password"
          },
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "password",
              errorMessage: "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character"
            },
            {
              validation: "minlength-6",
              errorMessage: "Password must be at least 6 characters long"
            }
          ]
        },
        {
          id: "terms",
          html: "I agree to the Terms & Conditions",
          type: "checkbox"
        },
      ]
    }
  ];

  submit() {
    if (this.dynamicForms) {
      const a = this.dynamicForms.getFormData();
      console.log("submiting test", a);
      return;
    }
  }
}
