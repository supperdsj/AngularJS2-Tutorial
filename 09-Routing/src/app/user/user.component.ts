import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <h2>id:{{id}}</h2>
      <!--<a [routerLink]="['user']">User</a>-->
      <!--<br>-->
      <!--<a [routerLink]="['/user']">/User</a>-->
      <!--<br>-->
      <!--<a [routerLink]="['../']">../</a>-->
      <!--<br>-->
      <button (click)="onNavigate()">Go Home</button>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private id: string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //ng2 router的重用机制会导致有可能不会重复执行constructor
    // this.id=activatedRoute.snapshot.params['id'];
    //使用观察者模式绑定params变化，但需要手动清理绑定
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    // this.router.navigate(['/'], {queryParams: {'analytics': this.activatedRoute.snapshot.params['id']},fragment:'section2'});
    this.router.navigate(['/'], {queryParams: {'analytics': this.activatedRoute.snapshot.params['id']},fragment:'section2',preserveQueryParams:true});
  }

}
