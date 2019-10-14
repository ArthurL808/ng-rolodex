import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contacts;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.contact().then(res =>{
      console.log(res)
      this.contacts = res;

      console.log(this.contacts)
    })
  }

}
