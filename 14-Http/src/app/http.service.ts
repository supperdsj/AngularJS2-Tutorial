import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Rx'
@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    //map为映射绑定到其他subsrcibe
    return this.http.get('https://angular2-53de4.firebaseio.com/title.json')
      .map((response: Response)=>response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    // const headers=new Headers({});
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('https://angular2-53de4.firebaseio.com/data.json',body)
    return this.http.post('https://angular2-53de4.firebaseio.com/data.json', body, {headers: headers})
      .map((response: Response)=>response.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://angular2-53de4.firebaseio.com/data.json')
      .map((response: Response)=>response.json());
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
