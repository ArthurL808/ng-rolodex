import { Component } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  formData = {
    name: '',
    username: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  }

  error = {
    password: '',
    email: ''
  }
  constructor(
    private backend: BackendService,
    private router: Router) { }

  register = () =>{
    if(this.formData.password !== this.formData.confirmPassword){
    return this.error.password = 'Passwords do not match.';
    } else if (!this.formData.email.includes('@')){
     return this.error.email = 'Email must include an @ symbol';    } else {
      this.backend.register(this.formData)
      this.formData.name = ''
      this.formData.username =''
      this.formData.email = ''
      this.formData.address = ''
      this.formData.password = ''
      this.formData.confirmPassword= ''
      this.error.password = ''
      this.error.email = ''
      return this.router.navigate(['/login'])
    }
  }


}
