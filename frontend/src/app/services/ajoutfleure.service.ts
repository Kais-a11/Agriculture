import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjoutfleureService {
  constructor(private http:HttpClient) {}
  private url= "http://127.0.0.1:3000/fleure/";

  ajout(fleure:any)
  {
    return this.http.post(this.url + 'ajout',fleure);
  }

  all(){
    return this.http.get(this.url +'all');
  }
}
