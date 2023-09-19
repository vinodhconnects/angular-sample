import { Component } from '@angular/core';
import { StyleService } from './services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sterling APP';
  menuitems=["Home","About us","Projects","Achievements","Reach us"]
  sitems:string[]=["Projects","Activites","Achievements","Employees","Case Studies","Products"]
  simages:string[]=["project.png","activities.png","achievements.png",
             "employees.png","casestudy.png","products.png"]

  smessage:string=""
  wvisibility:boolean=false;

  constructor(public ss:StyleService) {
         
  }

  receiveInfo(item:string):void {
     this.smessage = "The item that is selected is "+item;
     this.wvisibility=true;
     setTimeout(()=>{this.wvisibility=false},5000)
  }
}
