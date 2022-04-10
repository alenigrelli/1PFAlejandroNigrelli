import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTamanoletra]'
})
export class TamanoletraDirective implements OnInit {

  constructor(private elemento: ElementRef) {
  }


  ngOnInit(){
    this.elemento.nativeElement.style.fontSize = "20px"
    //this.elemento.nativeElement.style. = "100%"
  }
}
