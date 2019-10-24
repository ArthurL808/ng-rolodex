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
  password: '',
  loggedIn: false
};

error = {
  login: ''
}

usernameValid = false;
passwordValid = false;

  constructor(
    private auth: AuthService,
    private router: Router) { }
  
  login = () => {
  this.auth.login(this.formData).then(res =>{
    if(res === undefined){
      return this.error.login = 'Wrong username or password.'
    } else {
      console.log('Finished logging in');
      this.error.login = ''
      this.router.navigate(['']);
      return res;
    }
  }).catch(err =>{
    console.log(err.message)
  })
  }

  validateUsername = () =>{
    if(!this.formData.username){
      this.usernameValid = false;
    }
    if(this.formData.username.length < 3){
      this.usernameValid = false;
    } else {
      this.usernameValid = true;
    }
  }

  validatePassword = () =>{
    console.log(this.formData.password)
    if(!this.formData.password){
      this.passwordValid = false;
    } else {
      this.passwordValid = true;
    }
  }

}
