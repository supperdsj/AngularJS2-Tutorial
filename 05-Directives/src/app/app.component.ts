import {Component} from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isShow= true;
  private items = [1, 2, 3, 4, 5];
  private switchValue = 1;

  onShowChange() {
    this.isShow = !this.isShow;
  }

  onPush() {
    this.items.push((this.items.length + 1));
  }
  onSwitchChange(){
    this.switchValue++;
  }
}
