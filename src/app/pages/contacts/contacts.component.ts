import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  contacts;
  constructor(private backend: BackendService) {}

  ngOnInit(){
    this.backend.contacts().then(res => {
      this.contacts = res;
    });
  }

}
