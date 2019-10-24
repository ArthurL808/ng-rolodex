import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CreateComponent } from './pages/create/create.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactIdComponent } from './pages/contact-id/contact-id.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component'

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
     HomeComponent, 
     ContactsComponent, 
     CreateComponent, 
     ProfileComponent, 
     LoginComponent, 
     NotFoundComponent, ContactIdComponent, RegisterUserComponent, EditContactComponent, EditProfileComponent],
  imports: [BrowserModule, 
    AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
