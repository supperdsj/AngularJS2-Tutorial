import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {HttpService} from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data) => console.log(data)
      );
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        (data) =>console.log(data),
        (error) => console.log(error)
      );
  }

  onGetData(username: string, email: string) {
    this.httpService.getOwnData()
      .subscribe((data: any) => {
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      });
  }
}
