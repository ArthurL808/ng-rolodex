import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/create/create.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {LoginGuardService} from './services/login-guard.service'
import { ContactIdComponent } from './pages/contact-id/contact-id.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterUserComponent},
  {path: '', canActivate: [LoginGuardService], component: HomeComponent},
  {path: 'contacts',canActivate: [LoginGuardService], component: ContactsComponent},
  {path: 'profile',canActivate: [LoginGuardService], component: ProfileComponent},
  {path: 'create',canActivate: [LoginGuardService], component: CreateComponent},
  {path: 'contacts/:id', canActivate: [LoginGuardService], component: ContactIdComponent},
  {path: 'profile/edit', canActivate: [LoginGuardService], component: EditProfileComponent},
  {path:'contacts/:id/edit', canActivate: [LoginGuardService], component: EditContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
