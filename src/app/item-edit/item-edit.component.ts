import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Upload } from '../model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id:string="";
  uploadform:FormGroup;
  url: any="";
	msg = "";
  constructor(private adminserv:AdminService,private activeroute:ActivatedRoute,private router:Router) { 
    this.uploadform=new FormGroup({
      'item_name':new FormControl('',Validators.required),
      'item_type':new FormControl('',Validators.required),
      'qty_avail':new FormControl('',[Validators.required,Validators.min(1)]),
      'desc':new FormControl(''),
      'price':new FormControl('',Validators.required),
      'img':new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.activeroute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.adminserv.getdatabyid(paramsData.id).subscribe((data:Upload) => {
        //console.log(data)
        this.url=data.img;
        this.uploadform.patchValue(data)
      })
    })
  }
  
	
	
	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		console.log(mimeType,mimeType.match(/image\/*/))
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}
  upload()
  {
    
    if(this.uploadform.valid)
    {//console.log(this.id,this.uploadform.value)
      this.adminserv.editdata(this.id,this.uploadform.value).subscribe(()=>{
        if(this.uploadform.value.item_type=="Tiffin")
        {
          this.router.navigate(['/tiffins'])
        }
        else if(this.uploadform.value.item_type=="Meals")
        {
          this.router.navigate(['/meals'])
        }
        else 
        {
          this.router.navigate(['/snacks'])
        }
        console.log("uploaded successfully")
      },()=>{
        console.log("error")
      })
    }
  }
}
