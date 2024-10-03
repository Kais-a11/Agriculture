import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  id: any;
  user: any;

  constructor(
    private act: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.id = this.act.snapshot.paramMap.get('id');
    this.auth.getById(this.id).subscribe(
      res=>{
        this.user=res;
        console.log(this.user);
      }
    );
  }

  getEmail(): string {
    const email = localStorage.getItem('email') ?? '';
    console.log( email);
    return email;
  }
}
