import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
input.ng-invalid{
border: 1px solid red;
}`]
})
export class TemplateDrivenComponent {
  user = {
    username: 'username',
    email: '',
    password: '',
    gender:'male'
  };
  genders=['male','female'];
  onSubmit(form: NgForm) {
    console.log('Submit works');
    console.log(form);
    console.log(this.user);
  }
}
