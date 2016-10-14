import {Injectable} from '@angular/core';
import {LogService} from "./log.service";
import {EventEmitter} from "@angular/common/src/facade/async";
//
@Injectable()
export class DataService {
  pushDataed=new EventEmitter<string>();
  constructor(private logService: LogService) {
  }

  private data: string[] = [];

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  getData() {
    return this.data;
  }
  pushData(value:string){
    this.pushDataed.emit(value);
  }
}
