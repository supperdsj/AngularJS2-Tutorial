import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  inputValue: string = "input value";
  onTest = function () {
    return true;
  }

}
