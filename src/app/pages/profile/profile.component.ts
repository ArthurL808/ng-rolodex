import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service'
import {Router,ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(
    private backend: BackendService,
    private router: Router) {}

  ngOnInit(){
    this.backend.profile().then(res =>{
      this.user = res;
    });
  }
  edit = () =>{
    this.router.navigate(['profile/edit'])
  }
}
