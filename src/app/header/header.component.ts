import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
id=[1,0,0,0,0]
islogged:boolean=false;
username:string="";
isAdmin:boolean=false;
  constructor(public adminserv:AdminService,private router:Router) {
    this.islogged=this.adminserv.islogged;
    this.username=this.adminserv.username;
    this.isAdmin=this.adminserv.isAdmin;
   }

  ngOnInit(): void {
  }
  func(n:number)
  {
    for(let i=0;i<5;i++)
    {
      if(n-1==i)
      this.id[i]=1;
      else
      this.id[i]=0;
    }
  }
  logout(){
    localStorage.removeItem("access_token")
    this.adminserv.islogged=false;
    this.router.navigate(["/login"])
  }

}
