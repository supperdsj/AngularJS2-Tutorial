import {Directive, Input, HostListener, HostBinding,OnInit} from '@angular/core';

@Directive({
  selector: '[dirInputArrValue]'
})
export class InputArrValueDirective {
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';
  private backgroundColor = 'white';

  @HostListener('mouseenter') me() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') ml() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get sc1() {
    return this.backgroundColor;
  }

  constructor() {
  }
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }
}
