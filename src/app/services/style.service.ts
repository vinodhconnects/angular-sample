import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
private bcolor:string="#283747";
private bfont:string="Arial";
private styleinfo= {
  backgroundColor: this.bcolor,
  fontFamily: this.bfont
}
  constructor() { }

  setBcolor(color:string):void{
    this.styleinfo.backgroundColor = color;
  }

  setBfont(font:string):void{
    this.styleinfo.fontFamily = font;
  }

  getStyleInfo():any {return this.styleinfo}
}
