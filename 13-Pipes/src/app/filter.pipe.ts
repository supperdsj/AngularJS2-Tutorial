import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (item.match('^.*' + args[0] + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
