import { Component, OnInit } from '@angular/core';
import { Upload } from '../model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  item_list:Array<Upload>=[];
  constructor(private adminserv:AdminService) {
  
    
  }
  ngOnInit(): void {
    this.loadData()
    console.log(this.item_list)
  }

 loadData(){
   this.adminserv.getdata("Meals").subscribe((data:Array<Upload>) => {
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
