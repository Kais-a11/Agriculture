import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user= {
    username:'',
    email:'',
    password:''
  }
  image:any;

constructor(private auth:AuthService,private router:Router){}

  select(e:any)
  {
    this.image=e.target.files[0];
  }


register()
{
  let fd=new FormData()
    fd.append('name', this.user.username);
    fd.append('email',this.user.email);
    fd.append('password', this.user.password);
    fd.append('image', this.image)
    this.auth.register(fd)
    .subscribe(
      res=>
      {
        this.router.navigate(['/login']);
      }

    )

}
}
