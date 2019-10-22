import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

formData = {
  id: 0,
  username: '',
  email: '',
  address: '',
  loggedIn: false
};

  constructor(
    private auth: AuthService,
    private router: Router) { }
  
  login = () => {
  this.auth.login(this.formData).then(res =>{
    console.log('Finished logging in');
    this.router.navigate(['']);
    return res;
  }).catch(err =>{
    console.log(err.message)
  })
  }

}
