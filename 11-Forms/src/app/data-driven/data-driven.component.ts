import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  genders = ['male', 'female'];

  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl('dongsj', Validators.required),
    //     email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])
    //   }),
    //   password: new FormControl('', Validators.required),
    //   gender: new FormControl(this.genders[0]),
    //   hobbies: new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    //   // username: new FormControl(),
    //   // email: new FormControl(),
    //   // password: new FormControl()
    // });
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['dongsj', [Validators.required, this.exampleValidator]],
        'email': ['', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]]
      }),
      'password': ['', Validators.required],
      'gender': [this.genders[0]],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });
    this.myForm.valueChanges.subscribe(
      (data: any)=>console.log(data)
    );
    this.myForm.statusChanges.subscribe(
      (data: any)=>console.log(data)
    );
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl("", Validators.required));
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true}
    }
    else {
      return null;
    }
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({'invalid': true});
          } else {
            resolve(null);
          }
        }, 2000)
      }
    );
    return promise;
  }
}
