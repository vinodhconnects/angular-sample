import { Component , OnInit} from '@angular/core';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-stylebox',
  templateUrl: './stylebox.component.html',
  styleUrls: ['./stylebox.component.css']
})
export class StyleboxComponent implements OnInit {
   fonts:string[] = [
      "Arial","Times New Roman","Agency FB","Courier","Forte",
      "Consolas","Comic sans MS","Impact"
   ]
   font:string="Arial"
   bcolor:string="#F4F6F7";

   constructor(public ss:StyleService){

   }

   changeFont(fname:string):void {
      this.ss.setBfont(fname)
   }

   changeColor():void{
      this.ss.setBcolor(this.bcolor)
   }

   ngOnInit(){
    
       setInterval(()=>{this.fontChanger()},3000);
   }//runs automatically when class is instantiated after the constructor

   fontChanger(){
      this.font = this.fonts[Math.floor(Math.random()*8)]
   }
}
