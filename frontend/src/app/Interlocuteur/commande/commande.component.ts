import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private ajoutCommande:CommandeService,private router:Router){}

  commande :any ={
    username:'',
    email:'',
    Fleure:'',
    PhoneNumber:null,
    city:'',
    Qunatity:null,

  }
  ngOnInit(): void {
  }

  ajout()
  {
    this.ajoutCommande.ajout(this.commande)
    .subscribe(
      (res:any)=>
      {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err =>{
        console.log(err)
      }
    )

  }


}
