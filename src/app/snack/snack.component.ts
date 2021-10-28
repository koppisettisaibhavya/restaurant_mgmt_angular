import { Component, OnInit } from '@angular/core';
import { Upload } from '../model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {

  item_list:Array<Upload>=[];
  constructor(private adminserv:AdminService) {
  
    
  }
  ngOnInit(): void {
    this.loadData()
    console.log(this.item_list)
  }

 loadData(){
   this.adminserv.getdata("Snacks").subscribe((data:Array<Upload>) => {
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
