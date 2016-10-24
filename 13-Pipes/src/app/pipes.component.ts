import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-pipes',
  template: `
<div class="pipes">
<h1>Pipes</h1>
<h2>Built-in Pipes</h2>
<p>{{myValue}}</p>
<p>{{myValue|uppercase}}</p>
<p>{{myValue|slice:5}}</p>
<p>{{myValue|slice:3:7}}</p>
<p>{{myValue|slice:3:7|uppercase}}</p>
<p>{{myDate}}</p>
<p>{{myDate| date}}</p>
<p>{{myDate| date:"MM/dd/yyyy"}}</p>
<hr>
<h2>Custom Pipe</h2>
<input type="text" #input (keyup)="0">
<p>{{input.value}}</p>
<p>{{input.value | double}}</p>
<ul>
<input type="text" #newItem>
<button (click)="values.push(newItem.value)" class="btn btn-primary">Add item</button>
<li *ngFor="let item of values | filter:'ea'">
{{item}}
</li>
<h2>Async Pipe</h2>
<p>{{asyncValue | async}}</p>
</ul>
</div>
  `,
  styles: [`
.pipes{
margin: 32px;
padding: 32px;
}`]
})
export class PipesComponent implements OnInit {
  myValue = 'lowercase';
  myDate = new Date();
  values = ['Milk', 'Bread', 'Cola'];
  asyncValue = new Promise((resolve, reject)=> {
    setTimeout(()=>resolve('Data is here'), 2000);
  });

  constructor() {
  }

  ngOnInit() {
  }

}
