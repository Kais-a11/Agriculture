import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { ContactComponent } from './Interlocuteur/contact/contact.component';
import { CommandeComponent } from './Interlocuteur/commande/commande.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AuthGuard } from './services/auth-guard.guard';
import { AjoutFleureComponent } from './admin/ajout-fleure/ajout-fleure.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home', pathMatch:'full'},
  {path:'navbar', component:NavBarComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  {path:'contact',canActivate:[AuthGuard], component:ContactComponent},
  {path:'commande',canActivate:[AuthGuard], component:CommandeComponent},
  {path:'login' , component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'Myaccount/:id',component:MyAccountComponent},
  {path:'ajoutfleure',component:AjoutFleureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
