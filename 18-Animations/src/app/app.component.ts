import {
  Component, trigger, state, style, transition, animate, keyframes, group
}
  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal<=>highlighted', animate(300)),
      // transition('normal=>highlighted',animate(300)),
      // transition('highlighted=>normal',animate(500)),
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal=>highlighted', animate(300)),
      transition('highlighted=>normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('listOne', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ]),
    trigger('listTwo', [
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 1
          }),
        ]))
      ]),
      transition('* => void', [
        group([
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          })),
          animate(300, style({
            color: 'red'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Suger', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
  animationStart(event){
    console.log(event);
  }
  animationDone(event){
    console.log(event)
  }
}
