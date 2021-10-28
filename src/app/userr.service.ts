import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, orderitem, storeorder, Upload } from './model';
import { registeruser } from './model';
//import { HttpClient } from '@angular/common/HTTP';
import { loginuser } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserrService {
list:Array<orderitem>=[];
total:number=0;
  constructor(private http:HttpClient) { }
  registeruser(data:registeruser){
    return this.http.post(`https://myrestaapi.herokuapp.com/user/register`,data)
  }

  loginuser(data:loginuser){
    return this.http.post<LoginResponse>(`https://myrestaapi.herokuapp.com/user/login`,data)
  }
  getdata(type:string)
  {
    return this.http.get<Array<Upload>>(`https://myrestaapi.herokuapp.com/getitem/${type}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
);
  }
  storeorder(data:storeorder)
  {
    return this.http.post(`https://myrestaapi.herokuapp.com/user/storeorder`,data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
  }

    );
}
getorders(email:string)
{
  return this.http.get<Array<storeorder>>(`https://myrestaapi.herokuapp.com/user/getorders/${email}`, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem("access_token") || ""
    })
}

  );
}
}
