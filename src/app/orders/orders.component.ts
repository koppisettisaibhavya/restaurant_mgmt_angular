import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { orderitem } from '../model';
import { UserrService } from '../userr.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  list1:Array<orderitem>=[];
  total1:number=0;
  constructor(private userserv:UserrService,public adminserv:AdminService) { 
    this.list1=this.userserv.list
    this.total1=this.userserv.total
  }

  ngOnInit(): void {
    
  }
  removeItem(i:number)
  {
    if(i!=this.userserv.list.length-1)
    {
      let x=this.userserv.list[i].cost
      this.userserv.list.splice(i,1);
    console.log(this.userserv.list[this.userserv.list.length-1].total,x)
    this.userserv.list[this.userserv.list.length-1].total-=x
    }
    else{
      this.userserv.list.splice(i,1);
    }
    //this.list1.splice(i,1);
  }
    
}
