import { Component } from '@angular/core';
import {BackendService} from '../../services/backend.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contacts;
  formData = {
    name: '',
  };

  constructor(private backend: BackendService) { }

      search = () => {
      this.backend.search(this.formData.name).then(res => {
        this.contacts = res;
      });
      }
}
