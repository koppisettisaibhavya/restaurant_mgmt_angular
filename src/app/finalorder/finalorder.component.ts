import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { orderitem, storeorder } from '../model';
import { UserrService } from '../userr.service';

@Component({
  selector: 'app-finalorder',
  templateUrl: './finalorder.component.html',
  styleUrls: ['./finalorder.component.css']
})
export class FinalorderComponent implements OnInit {
  list1:Array<orderitem>=[];
  total1:number=0;
  constructor(private userserv:UserrService,private adminserv:AdminService) { 
    this.list1=this.userserv.list
    this.total1=this.userserv.total
  }

  ngOnInit(): void {
    console.log(this.list1)
    let ordit:storeorder=Object();
    ordit.email=this.adminserv.username;
    ordit.date=new Date().toLocaleDateString()
    ordit.order=this.list1;
    ordit.total=this.list1[this.list1.length-1].total
    this.userserv.storeorder(ordit).subscribe(()=>{
      console.log("stored")
    },()=>{
      console.log("error");
    })
  }

}
