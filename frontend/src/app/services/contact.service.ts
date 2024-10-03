import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  private url="http://127.0.0.1:3000/contact/";

  ajout(contact:any)
  {
    return this.http.post(this.url +'ajout',contact);
  }
}
