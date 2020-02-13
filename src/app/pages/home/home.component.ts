import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  contacts;
  formData = {
    name: ""
  };

  constructor(private backend: BackendService) {}

  search = () => {
    const cap =
      this.formData.name.charAt(0).toUpperCase() + this.formData.name.slice(1);

    this.backend.search(cap).then(res => {
      this.contacts = res;
    });
  };
}
