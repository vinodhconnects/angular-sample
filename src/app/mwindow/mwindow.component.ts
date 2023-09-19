import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mwindow',
  templateUrl: './mwindow.component.html',
  styleUrls: ['./mwindow.component.css']
})
export class MwindowComponent {
 @Input() message:string=""
}
