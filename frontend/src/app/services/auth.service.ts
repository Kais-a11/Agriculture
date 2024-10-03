import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
  private url= "http://127.0.0.1:3000/user/";

  register(user:any)
  {
   return this.http.post(this.url +'register' ,user);
  }

  login(user: any) {
    return this.http.post<any>(this.url + 'login', user).pipe(
      map(response => response.mytoken)
    );
  }


  IsLoged()
  {
    let token=localStorage.getItem('token');
    if(token)
    {
      return true;
    }
    else{
      return false;
    }
  }

  getAuthorDataFromToken()
    {
      let token=localStorage.getItem('token');
      if(token)
      {
        let data=JSON.parse(window.atob(token.split('.')[1]))
        return data;
      }
    }

    getById(id: any) {
      return this.http.get(this.url + 'getbyid/' + id).pipe(
        tap((user: any) => {
          localStorage.setItem('email', user.email);
        })
      );
    }

    getEmail(): string {
      return localStorage.getItem('email')?? '';
    }
  
}
