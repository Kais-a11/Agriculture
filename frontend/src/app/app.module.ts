import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { ContactComponent } from './Interlocuteur/contact/contact.component';
import { CommandeComponent } from './Interlocuteur/commande/commande.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyAccountComponent } from './my-account/my-account.component';
import { AjoutFleureComponent } from './admin/ajout-fleure/ajout-fleure.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CommandeComponent,
    LoginComponent,
    SignUpComponent,
    MyAccountComponent,
    AjoutFleureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
