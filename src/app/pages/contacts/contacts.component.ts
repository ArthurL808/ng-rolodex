import { Component } from '@angular/core';
import {BackendService} from '../../services/backend.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts;
  constructor(private backend: BackendService) {
    this.backend.contact().then(res => {
      this.contacts = res;
    });
  }

}
