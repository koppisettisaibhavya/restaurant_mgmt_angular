import { Component, OnInit } from '@angular/core';
import { Upload } from '../model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-tiffin',
  templateUrl: './tiffin.component.html',
  styleUrls: ['./tiffin.component.css']
})
export class TiffinComponent implements OnInit {
  
  item_list:Array<Upload>=[];
  constructor(private adminserv:AdminService) {
  
    
  }
  ngOnInit(): void {
    this.loadData()
    console.log(this.item_list)
  }

 loadData(){
   this.adminserv.getdata("Tiffin").subscribe((data:Array<Upload>) => {
     this.item_list = data
     console.log(data);
    })
 }
 deleteData(id?:string)
 {console.log("")
  this.adminserv.deletedatabyid(id).subscribe(() => {
    this.loadData()
  })
 }
}
