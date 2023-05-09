import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //initiate the new Loading variable via BehaviorSubject and set it to "true" from the beginning.
  public loading$ = new BehaviorSubject<boolean>(true);
  
  constructor(private http: HttpClient) {
    //set the loading$ to true again just before we start the HTTP call
    this.loading$.next(true);
  }

  login(user: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user);
  }
}
