import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class SessionService {
user = {
    id: 0,
    username: '',
    email: '',
    address: '',
    loggedIn: false
};

constructor(){
    const userString = localStorage.getItem('user');
    try {
        if(userString){
            this.user = JSON.parse(userString);
        } else{
            console.log('user was not found')
        }
    } catch(err){
        console.log('could not parse user')
    }
}

    getSession(){
        return this.user;
    }

    setSession(data){
    this.user.id = data.id;
    this.user.username = data.username;
    this.user.email = data.email;
    this.user.address = data.address;
    this.user.loggedIn = true;

    const userString = JSON.stringify(this.user)
    localStorage.setItem('user', userString )
    }

    clearSession() {
    this.user.id = 0;
    this.user.username = '';
    this.user.email = '';
    this.user.address = '';
    this.user.loggedIn = false;

    localStorage.removeItem('user');
    }

    isLoggedIn(){
        return this.user.loggedIn;
    }
};
