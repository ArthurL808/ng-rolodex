import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { SessionService } from './session.service';


@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate{
    constructor(
        private session: SessionService,
        private router: Router){}

        canActivate(): boolean {
            if(!this.session.isLoggedIn()){
                this.router.navigate(['login'])
                return false;
            }
            return true;
        }
}
