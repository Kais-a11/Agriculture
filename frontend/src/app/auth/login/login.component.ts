import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={
    email:'',
    password:''

  }
  token:any;
  constructor(private auth:AuthService, private router:Router){}

  login() {
    this.auth.login(this.user).subscribe(
      token => {
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
        alert("email or password invalid");
      }
    );
  }

}
