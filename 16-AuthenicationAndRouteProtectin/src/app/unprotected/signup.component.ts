import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignup()">
            <div class="input-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" #email>
                <span *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">Invalid mail address</span>
                <!--<span *ngIf="email.errors['isTaken']">This username has already been taken</span>-->
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password">
            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword>
                <span *ngIf="!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']">Passwords do not match</span>
            </div>
            <button type="submit" [disabled]="!myForm.valid">Sign Up</button>
        </form>
    `
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder) {
    }

    onSignup() {

    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.compose([
                Validators.required,
                this.isEqualPassword.bind(this)
            ])],
        });
    }

    isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.myForm) {
            return {passwordsNotMatch: true};

        }
        if (control.value !== this.myForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
    }
}
