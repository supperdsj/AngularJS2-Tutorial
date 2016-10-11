import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-template-and-style',
  template: `
    <p>
      inline-template-and-style Works!
    </p>
  `,
  styles: [`
    *{
    color: red;
    }
`]
})
export class InlineTemplateAndStyleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
