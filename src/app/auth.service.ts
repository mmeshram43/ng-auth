import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl= 'http://localhost:3000/api/user/login'
  createUrl = 'http://localhost:3000/api/user'

  serverResppnse : any
  isAuth = false
  token = ''

  constructor(private _http : HttpClient ) { }

  login( credentials : any ){
    return this._http.post(this.loginUrl , credentials)
  }

  createUser( form :any ){
    return this._http.post(this.createUrl , form)
  }

  loggedIn(){
    // console.log('Inside of loggedin',this.token)
    return !!(this.token)
  }
  logOut(){
    this.token = ''

  }

}
