import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-event-binding',
  templateUrl: './component-event-binding.component.html',
  styleUrls: ['./component-event-binding.component.css']
})
export class ComponentEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //缺省使用变量名作为eventName
  // @Output() clicked=new EventEmitter<string>();
  @Output('componentEventClicked') clicked=new EventEmitter<string>();
  onClicked(){
    this.clicked.emit('component event binding worked');
  }
}
