import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class SessionService {
user = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: '',
};

private _isLoggedIn = new BehaviorSubject<boolean>(false);

constructor(){

    const userString = localStorage.getItem('user');
    try {
        if(userString){
            this.user = JSON.parse(userString);
        } else{
            console.log('user was not found')
        }
        this._isLoggedIn.next(!!userString)
    } catch(err){
        console.log('could not parse user')
    }
}

    getSession(){
        return this.user;
    }

    setSession(data){
    this.user.id = data.id;
    this.user.name = data.name;
    this.user.username = data.username;
    this.user.email = data.email;
    this.user.address = data.address;

    const userString = JSON.stringify(this.user)
    localStorage.setItem('user', userString )

    this._isLoggedIn.next(true);
    }

    clearSession() {
    this.user.id = 0;
    this.user.name = '';
    this.user.username = '';
    this.user.email = '';
    this.user.address = '';
    

    localStorage.removeItem('user');

    this._isLoggedIn.next(false);
    }

    loggedInObservable(){
        return this._isLoggedIn.asObservable();
    }
};
