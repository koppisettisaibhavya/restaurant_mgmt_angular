import { Injectable } from '@angular/core';
import { loginuser, registeruser, Upload } from './model';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { orderitem,LoginResponse } from './model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //list:Array<orderitem>=[];
  isAdmin:boolean=false;
  islogged:boolean=false;
  username:string="";
  constructor(private http:HttpClient) { }
  savedata(data:Upload)
  {
    return this.http.post(`https://myrestaapi.herokuapp.com/additem`,data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
);
  }
  editdata(id:string,data:Upload)
  {
    return this.http.put(`https://myrestaapi.herokuapp.com/edititem/${id}`,data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
);
  }
  deletedatabyid(id?:string)
  {
    return this.http.delete(`https://myrestaapi.herokuapp.com/deleteitem/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
);
  }
  getdatabyid(id?:string)
  {
    return this.http.get<Upload>(`https://myrestaapi.herokuapp.com/getitemid/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
);
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
  registeruser(data:registeruser){
    return this.http.post(`https://myrestaapi.herokuapp.com/admin/register`,data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
)
  }

  loginuser(data:loginuser){
    return this.http.post<LoginResponse>(`https://myrestaapi.herokuapp.com/admin/login`,data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    }
)
  }
}
