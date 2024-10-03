import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutfleureService } from 'src/app/services/ajoutfleure.service';

@Component({
  selector: 'app-ajout-fleure',
  templateUrl: './ajout-fleure.component.html',
  styleUrls: ['./ajout-fleure.component.css']
})
export class AjoutFleureComponent {
  constructor(private ajoutF:AjoutfleureService, private router:Router){}
  fleure:any ={
    title:'',
    description:'',
  }

  image:any;

  select(e:any){
    this.image=e.target.files[0];
    
  }

  create(){
    let create=new FormData();
    create.append("title",this.fleure.title);
    create.append("description",this.fleure.description);
    create.append("image",this.image)
    this.ajoutF.ajout(create)
    .subscribe(
      (res)=>
      {
        this.router.navigate(['/home']);
      },
      (err)=>{
        console.log(err)
      }

    )

  }

}
