import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  checkLogin() {
    console.log("checkLogin()");
    // TODO check if jwt token saved and valid, try to login using it if avail
  }

  doLogin(user: string, pass: string) {
    this.http.post<any>('http://0.0.0.0:4004/api/v1/user/login',
      { user: user, pass: pass },
      { headers: this.headers })
    .subscribe(
      //console.log(data);
      (data: any) => console.log(data), // for handling data
        (error: any) => console.log(error), // for handling error
        () => console.log('completed') // for handling completion
    )

    console.log("doLogin(username: " + user + ", password:" + pass +")");

  }

}
