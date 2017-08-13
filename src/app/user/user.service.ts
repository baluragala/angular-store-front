import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserService {

  subject: Subject<any> = new Subject();

  private _loggedIn = false;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(value: boolean) {
    this._loggedIn = value;
    if (value) {
      this.subject.next(value);
    }
  }

  constructor(private http: Http,
              @Inject('API_ENDPOINT') private apiEndpoint: string) {
  }

  register(user) {
    return this.http.post(`${this.apiEndpoint}/users/signup`, user)
      .map(response => response.json())
  }

  login(email, password) {
    console.log(email, password);
    return this.http.post(`${this.apiEndpoint}/auth`, {email, password})
      .map(response => response.json())
  }

  getObservable() {
    return this.subject.asObservable();
  }

  logout() {
    this.subject.next(false);
  }
}
