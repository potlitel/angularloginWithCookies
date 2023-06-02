import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersService } from './services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  //initiate the new Loading variable via BehaviorSubject and set it to "true" from the beginning.
  public loading$ = new BehaviorSubject<boolean>(false);

  /**
   * Description
   * @param {UsersService} publicuserService
   *  */
  constructor(public userService: UsersService) {
    //set the loading$ to true again just before we start the HTTP call
    this.loading$.next(false);
  }

  /**
   * Description
   * @returns {any}
   *  */
  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  /**
   * Description
   * @param {any} m
   * @returns {any}
   *  */
  sleep = (m: any): any => new Promise((r) => setTimeout(r, m));

  /**
   * Description
   * @returns {any}
   *  */
  login(): void {
    //set the loading$ to true again just before we start the HTTP call
    this.loading$.next(true);
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      (data) => {
        console.log(data);
      }, //onError method (Blank for now)
      (err) => {
        console.log(err);
        setTimeout(() => {
          this.loading$.next(false);
        }, 2000);
      },
      //onComplated method, now that we have the data we can set the loading to false
      () => {
        // this.sleep(10000);
        setTimeout(() => {
          this.loading$.next(false);
        }, 2000);
      }
    );
  }
}
