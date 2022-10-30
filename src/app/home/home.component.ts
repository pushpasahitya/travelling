import { DOCUMENT } from '@angular/common';
import { compileInjector } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { SnService } from '../sn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:string= "CERTY BOX";
passport = 89098765;
surname="kuralla";
bank="200";
num="20";
todayDate=new Date();
status=true;
status1=false;
stat=false;
mobiles=['vivo','samsung','redmi'];
flower=['rose','sunflower','jasmine'];
laptops=['vivo','samsung','redmi']; 
today:any;
document:any;
  constructor(@Inject(DOCUMENT)document:Document, private sn:SnService) { 
 this.document=document;
 this.today=this.sn.gettodaydate();

  }
print(event:any){
  alert(this.surname);
//alert(this.document.getElementByID('txtemail').value);
//this.document.write(this.laptops);
}
  ngOnInit(): void {
    alert("hello shathi");
  }

}
