import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnChanges {

  @Input()
  size = '20px'

  constructor(
    public elementRef: ElementRef, 
    public renderer: Renderer2)
  {   
    this.setStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.size = changes['size']?.currentValue
    this.setStyle()
  }

  setStyle(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontSize',
      this.size
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'textDecoration',
      'underline'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontWeight',
      'bolder'
    )
  }

}
