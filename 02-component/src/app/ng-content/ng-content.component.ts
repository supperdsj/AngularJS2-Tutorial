import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  template: `
    <p>
      ng-content Works!
    <ng-content></ng-content>
    </p>
    
  `,
  styles: [`
p{
border: 1px solid red;
}
`]
})
export class NgContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
