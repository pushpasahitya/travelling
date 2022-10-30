import { Component, OnInit } from '@angular/core';
import { SnService } from '../sn.service';

@Component({
  selector: 'app-clg',
  templateUrl: './clg.component.html',
  styleUrls: ['./clg.component.css']
})
export class ClgComponent implements OnInit {
  today:any;

  constructor(private sn:SnService) {
    this.today=this.sn.gettodaydate;
   }

  ngOnInit(): void {
  }

}
