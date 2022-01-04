import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  // styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private _apiResponse : any;
  isValid = false
  loginError = false
  loginMessage = ''
  errorMessage = ''
  successMessage = ''
  messageClass= 'alert'
  isReg = false

  constructor(  private _auth : AuthService , private _router : Router ) { }

  onLogin(form : NgForm){
    this._auth.login(form.value).subscribe(
      res => {
        console.log(res)
        this._apiResponse = res
        this._auth.token = this._apiResponse.token
        // this.loginMessage= this._apiResponse.message 
        this._auth.isAuth = true
        this._router.navigate(['home'])
        console.log("logged In")
      },
      error =>{
        this._apiResponse = error.error
        this.loginMessage= this._apiResponse.message 
        this.loginError = true
        console.log(error)
      }
     ) ;
  }

  onRegister(register : NgForm ){
    console.log(register.value)
    this._auth.createUser(register.value).subscribe( res => 
      {
        this._apiResponse = res
        console.log(this._apiResponse)
        this.successMessage = this._apiResponse.message
        if(this._apiResponse.registered) this.messageClass = 'alert alert-success'
        else this.messageClass = 'alert alert-danger'
      
        this.isReg = true 
        setTimeout( ()=>{
          this.isReg = false 
      }, 3000 )
      // console.log(this.apiResponse.message)
      }
      , err => alert("Server error") )
       register.reset()
  }
  ngOnInit(): void {
  }

}
