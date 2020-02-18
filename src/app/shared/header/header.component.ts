import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user;
  constructor(
    private router: Router,
    private session: SessionService,
    private auth: AuthService) {
      this.user = this.session.getSession();
    }

  
  logout = () => {
  this.auth.logout();

  return this.router.navigate(['/login'])
  }
}
