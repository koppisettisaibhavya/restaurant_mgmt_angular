import { Component, OnInit } from '@angular/core';
import {Upload} from '../model';
import { AdminService } from '../admin.service';
import { UserrService } from '../userr.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  item_list:Array<Upload>=[];
  constructor(public adminserv:AdminService,public userserv:UserrService) {
  
    
  }
  ngOnInit(): void {
    
  }

 
 

}
