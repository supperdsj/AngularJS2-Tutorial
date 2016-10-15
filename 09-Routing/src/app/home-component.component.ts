import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
    <section id="section1">section1</section>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <section id="section2">section2</section>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;

  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
        (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
