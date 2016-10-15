import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-edit',
  template: `
        <h3>User Edit</h3>
        <button (click)="done=!done">Done</button> <br>
        {{done}} <br>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    `
})
export class UserEditComponent implements ComponentCanDeactivate {

  done = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  onNavigate() {
    // this.router.navigate(['/'], {queryParams: {'analytics': this.activatedRoute.snapshot.params['id']},fragment:'section2'});
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean>|boolean {
    if (!this.done) {
      return confirm('Do you want to leave?');
    } else {
      return true;
    }
  }
}
