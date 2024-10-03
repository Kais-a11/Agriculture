import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ajoutContact:ContactService, private router:Router){}
  contact:any = {
    username:'',
    PhoneNumber:null,
    email:'',
    comments:''
  }
  
  ngOnInit(): void {   
  }

  ajout() {
    this.ajoutContact.ajout(this.contact)
      .subscribe(
        (res: any) => {
          console.log(res); // Affiche la réponse du serveur (facultatif)
          this.router.navigate(['/home']);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }


}
