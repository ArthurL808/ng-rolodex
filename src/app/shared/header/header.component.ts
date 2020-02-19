import { Component,OnInit,OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  user: object;

  private _isLoggedIn = false;
  private _loggedInObservable;

  constructor(
    private router: Router,
    private session: SessionService,
    private auth: AuthService) {
      this.user = this.session.getSession();
    }

ngOnInit(){
  this._loggedInObservable = this.session.loggedInObservable().subscribe(
    (loggedIn: boolean) => {
      this._isLoggedIn = loggedIn;
    },
    (error) => {
console.log(error);
    },
  );
}
  isLoggedIn(){
    return this._isLoggedIn;
  }

  logout = () => {
  this.auth.logout();

  return this.router.navigate(['/login'])
  }

  ngOnDestroy(){
    this._loggedInObservable.unsubscribe();
  }
}
