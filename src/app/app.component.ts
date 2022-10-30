import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
print($event: MouseEvent) {
throw new Error('Method not implemented.');
}
  title = 'pushpasahitya';
  name:string="pushu";
  name1:string="bhavija";
  surname:string="kuralla" ;
  

  ngOnInit(): void {
    alert("hello shathi ga");
  }

}
