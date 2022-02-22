import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable(
  { providedIn: 'root' }
)
export class JwtService {

  jwtToken: string | null = "";
  decodedToken: { [key: string]: string } | null = {};

  constructor() {
    console.log("instantiated");
  }

  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
      this.decodeToken();
    }
  }

  getToken(): string {
    console.log(this.jwtToken);
    return "" + this.jwtToken;
  }

  getTokenWithPrefix(): string {
    return "Bearer " + this.getToken();
  }

  getUser() {
    return this.decodedToken ? this.decodedToken.userId : null;
  }

  isTokenExpired(): boolean {
    const expiryTime = this.getExpiryTime();
    if (expiryTime != null) {
      return ((1000 * Number(expiryTime)) - (new Date()).getTime()) < 5000;
    }
    return false;
  }

  isValid(): boolean {
    return (this.getUser() != null && !this.isTokenExpired());
  }

  removeToken(): void {
    console.log("token removed");
    this.jwtToken = null;
    this.decodedToken = null;
  }

  private getExpiryTime() {
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  private decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

}

/*function providedIn(providedIn: any, arg1: string) {
  throw new Error('Function not implemented.');
}*/

