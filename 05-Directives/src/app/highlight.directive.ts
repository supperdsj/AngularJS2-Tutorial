import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  // private elementRef: ElementRef;
  //
  // constructor(elementRef: ElementRef) {
  //   this.elementRef = elementRef;
  // }
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','green');
  }

  // private backgroundColor='white';
  // @HostListener('mouseenter') me(){
  //   this.backgroundColor='green';
  // };
  // @HostListener('mouseleave') ml(){
  //   this.backgroundColor='yellow';
  // };
  // @HostBinding('style.backgroundColor') get sc1(){
  //   return this.backgroundColor;
  // }
  @HostListener('mouseenter') me() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red');
  };

  @HostListener('mouseleave') ml() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  };
}
