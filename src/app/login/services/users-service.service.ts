import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user);
  }
}
