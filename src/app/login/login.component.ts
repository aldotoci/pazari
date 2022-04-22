import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { TokenService } from '../_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required] 
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private tokenService:TokenService
  ) { }

  isUserEmpty = false
  isPasswordEmpty = false
  loginFailedMessage: any = null

  ngOnInit(): void {
  }

  onLogIn(){
    if(this.loginForm.valid && this.loginForm.dirty){
      this.userService.login(this.loginForm.value).subscribe(response => {
        const token = response.token
        this.tokenService.setToken(token)
        this.loginFailedMessage = null
        this.isUserEmpty = false
        this.isPasswordEmpty = false
      }, error => {
        if(error.status === 404){
          console.log(error)
          return this.loginFailedMessage = error.error.message
        }
        return console.log('Some internal server error happened ! :( please contact owner.')
      })
      this.isUserEmpty = false
      this.isPasswordEmpty = false
      return 
    }
    if(this.loginForm.value.user.length === 0){
      if(this.loginForm.value.password.length === 0){
        this.isPasswordEmpty = true
        return this.isUserEmpty = true
      }
      return this.isUserEmpty = true
    }
    return this.isPasswordEmpty = true
  }    
}
