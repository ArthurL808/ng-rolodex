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

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
     HomeComponent, 
     ContactsComponent, 
     CreateComponent, 
     ProfileComponent, 
     LoginComponent, 
     NotFoundComponent],
  imports: [BrowserModule, 
    AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
