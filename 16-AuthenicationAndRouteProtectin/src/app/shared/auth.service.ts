import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {
  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      console.log(error);
    });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
      console.log(error);
    });
  }

  isAuthenticated():Observable<boolean> {
    // var user = firebase.auth().currentUser;
    // return !!user;
    const subject=new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }
}
