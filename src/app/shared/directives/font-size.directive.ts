import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(
    public elementRef: ElementRef, 
    public renderer: Renderer2)
  {   
    this.setStyle()
  }

  setStyle(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontSize',
      '20px'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'textDecoration',
      'underline'
    )
  }

}
