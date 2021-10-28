import { Component, OnInit } from '@angular/core';
import { Upload } from '../model';
import { UserrService } from '../userr.service';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-tiffin1',
  templateUrl: './tiffin1.component.html',
  styleUrls: ['./tiffin1.component.css']
})
export class Tiffin1Component implements OnInit {

  item_list:Array<Upload>=[];
  constructor(private adminserv:AdminService,private userserv:UserrService) {
  
    
  }
  ngOnInit(): void {
    this.userserv.getdata("Tiffin").subscribe((data:Array<Upload>) => {
      this.item_list = data
      console.log(data);
     })
  }
  orderItem(name:string,price:number,event:any){
    console.log(event.target.qty.value)
    let cost=event.target.qty.value*price
    let tot=0;
    this.userserv.list.forEach((ele)=>{tot+=ele.cost})
    this.userserv.list.push({"name":name,"qty":event.target.qty.value,"price":price,"cost":cost,"total":(tot+cost)})
    //console.log(this.adminserv.list)
    //this.userserv.total+=cost
  }
}
