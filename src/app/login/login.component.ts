import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserrService } from '../userr.service';
import { LoginResponse } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  constructor(private adminserv:AdminService,private userserv:UserrService,private router:Router) { 
    this.loginform=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',Validators.required),
      'check':new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  login_submit()
  {
    Object.keys(this.loginform).forEach((field)=>{
      let control=this.loginform.get(field)
      if(control instanceof FormControl)
      {
        control.markAsTouched({onlySelf:true})
      }
    })
    if(this.loginform.valid)
    {
      
      console.log(this.loginform.value);
      if(this.loginform.value.check=="Admin")
      {
        this.adminserv.loginuser(this.loginform.value).subscribe((data:LoginResponse) => {
          window.localStorage.setItem("access_token",data.token)
          this.adminserv.isAdmin=true;
          this.adminserv.username=this.loginform.value.email;
          this.adminserv.islogged=true;
          this.router.navigate(["/home"])
        }, (err) => {
          console.log(err);
        })
        
      }
      else{
        this.userserv.loginuser(this.loginform.value).subscribe((data:LoginResponse) => {
          window.localStorage.setItem("access_token",data.token)
          this.adminserv.isAdmin=false;
          this.adminserv.username=this.loginform.value.email;
          this.adminserv.islogged=true;
          this.router.navigate(["/home"])
        }, (err) => {
          console.log(err);
        })
      }
      
  
    //   this.serv.loginuser(this.loginform.value).subscribe(()=>{
    //     console.log("logged in");
    //     this.serv.email=this.loginform.value.email;
    //     this.router.navigate(['./home'])
        
    //   },()=>{
    //     console.log("error");
    //   })
    // }
  }
}

}
