import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[Tamanoletra]'
})
export class Tamanoletra implements OnInit {

  constructor(private elemento: ElementRef) {
  }


  ngOnInit(){
    this.elemento.nativeElement.style.fontSize = "20px";
  }
}
