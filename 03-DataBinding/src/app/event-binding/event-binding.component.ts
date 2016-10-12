import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClicked(){
    alert('click worked');
  }
  triggerComponentEvent(value:string){
    alert(value);
  }
}
