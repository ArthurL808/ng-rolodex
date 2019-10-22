import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private backend: BackendService) {}

  ngOnInit(){
    this.backend.profile().then(res =>{
      this.user = res;
    });
  }
}
