import { Component } from '@angular/core';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  formData = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    github: ''
  };

  constructor(private backend: BackendService) { }

  create = () => {
    this.backend.create(this.formData)
    this.formData.name = '';
    this.formData.address = '';
    this.formData.mobile = '';
    this.formData.work = '';
    this.formData.home = '';
    this.formData.email = '';
    this.formData.github = '';
  }


}
