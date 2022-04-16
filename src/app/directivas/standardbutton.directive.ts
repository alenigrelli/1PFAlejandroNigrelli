import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStandardbutton]'
})
export class StandardbuttonDirective {

  constructor(private elemento: ElementRef) {
  }


  ngOnInit(){
    this.elemento.nativeElement.style = "background-color: #005b8f; color:white; margin-left: 10px;";
  }
}
