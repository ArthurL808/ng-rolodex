import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { SessionService } from './session.service';


@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate{
    private _isLoggedIn = false;
    private _loggedInObservable;
    constructor(
        private session: SessionService,
        private router: Router){}

        canActivate(): boolean {
            this._loggedInObservable = this.session.loggedInObservable().subscribe(
                (loggedIn: boolean) => {
                  this._isLoggedIn = loggedIn;
                },
                (error) => {
            console.log(error);
                },
              );
            if(!this._isLoggedIn) {
                this.router.navigate(['login'])
                this._loggedInObservable.unsubscribe()
                return false;
            }
            return true;
        }
}
