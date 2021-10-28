import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Upload } from '../model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadform:FormGroup;
  url: any="";
	msg = "";
  constructor(private adminserv:AdminService,private router:Router) { 
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
    {//console.log(this.url)
      this.uploadform.value.img=this.url
      this.adminserv.savedata(this.uploadform.value).subscribe(()=>{
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
