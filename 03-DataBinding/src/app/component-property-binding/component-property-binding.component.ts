import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-component-property-binding',
  templateUrl: './component-property-binding.component.html',
  styleUrls: ['./component-property-binding.component.css']
})
export class ComponentPropertyBindingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() result: number = 0;
}
