import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[dirClickEvent]'
})
export class ClickEventDirective {
  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target);
    event.target.style.backgroundColor = 'yellow';
  }

  constructor() {
  }

}
