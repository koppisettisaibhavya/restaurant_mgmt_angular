import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  isAdmin:boolean=true;
  id=[1,0,0]
  constructor(public adminserv:AdminService) {
    this.isAdmin=this.adminserv.isAdmin
   }
  
  ngOnInit(): void {
  }
  func(n:number)
  {
    for(let i=0;i<3;i++)
    {
      if(n-1==i)
      this.id[i]=1;
      else
      this.id[i]=0;
    }
  }
}
