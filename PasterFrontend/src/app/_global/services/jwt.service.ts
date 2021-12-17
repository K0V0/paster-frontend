import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable()
export class JwtService {

  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor() {
    this.jwtToken = "";
    this.decodedToken = {};
  }

  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
      this.decodeToken();
    }
  }

  getTokenWithPrefix(): string {
    return "Bearer " + this.jwtToken;
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

  private getExpiryTime() {
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  private decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

}
