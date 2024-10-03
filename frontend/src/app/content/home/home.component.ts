import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutfleureService } from 'src/app/services/ajoutfleure.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  flowers:any[]=[];
  constructor(private ajout:AjoutfleureService, private router:Router){}


  ngOnInit() {
    this.getFleure();
  }

  order()
  {
    this.router.navigate(['/commande'])
  }

  getFleure(): void {
    this.ajout.all().subscribe(
      (res:any) => {
        this.flowers = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
