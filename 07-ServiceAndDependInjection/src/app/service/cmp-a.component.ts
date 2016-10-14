import {Component} from '@angular/core';
import {LogService} from './log.service'
import {DataService} from "./data.service";
@Component({
  selector: 'si-cmp-a',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  // providers: [LogService, DataService]
  providers: []
})
export class CmpAComponent {
  value = '';
  items: string[] = [];

  constructor(private logService: LogService, private  dataService: DataService) {
  }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
    // this.items = this.dataService.getData().slice(0);
  }

  onSend(value: string) {
    this.dataService.pushData(value);
  }
}
