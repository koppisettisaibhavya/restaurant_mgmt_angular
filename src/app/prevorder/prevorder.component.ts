import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserrService } from '../userr.service';
import { storeorder } from '../model';
@Component({
  selector: 'app-prevorder',
  templateUrl: './prevorder.component.html',
  styleUrls: ['./prevorder.component.css']
})
export class PrevorderComponent implements OnInit {
  list1:Array<storeorder>=[];
  constructor(private userserv:UserrService,private adminserv:AdminService) { }

  ngOnInit(): void {
    this.userserv.getorders(this.adminserv.username).subscribe((data:Array<storeorder>)=>{
      this.list1=data;
      //console.log(this.orders)
    })
  }

}
