import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
     @Input() title:string=""
     @Input() image:string=""
     @Output("itemclicked") selectItem:EventEmitter<string>=new EventEmitter<string>()

     onItemSelect():void {
       this.selectItem.emit(this.title)
     }
}

