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

  constructor(public ss:StyleService) {
         
  }
}
