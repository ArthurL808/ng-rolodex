import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {SessionService} from './session.service'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private backend: BackendService,
        private session: SessionService) {}

    login(data){
   return this.backend.login(data).then(res =>{
       this.session.setSession(res);
   }).catch(err =>{
       console.log(err.message)
   })
    }

    register(data) {
    return this.backend.register(data).then(res =>{
        this.session.setSession(res);
    });
    }

    logout(){
    return this.backend.logout().then(() =>{
    this.session.clearSession();
    });
    }
}