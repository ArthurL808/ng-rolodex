import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
 formData;
  constructor(
    private backend: BackendService,
    private router: Router) { }

  ngOnInit() {
  this.backend.profile().then(res =>{
    this.formData = res;
  })
  }

  edit = () => {
    this.backend.editProfile(this.formData).then(res =>{
      this.router.navigate(['/profile'])
      return res;
    }).catch(err =>{
      console.log(err.message);
    })
  }
}
