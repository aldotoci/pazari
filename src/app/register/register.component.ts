import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import {utc} from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname:  ['', Validators.required],
    username: ['', Validators.required],
    phone:['', Validators.required],
    prefix: ['355', Validators.required],
    email:['', Validators.required],
    confirmEmail: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    dateCreated: ""
  })

  error = null
  isValid = true
  doesUsernameExists = false
  doesEmailExists = false
  doesPhoneExists = false

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.registerForm.dirty && this.registerForm.valid){
      this.registerForm.value.createdDate = utc('2002-12-09')
      this.userService.register({data: this.registerForm.value}).subscribe(response => {
        this.error = null
        console.log(response.message)
      }, error => {
          if(error.status === 400){
            this.error = error.error.message
          }if(error.status === 500){
            this.error = error.error.err
            console.log("An error occurred this should normaly never happen, if error still required even retrying please contact owner at: tocialdo@gmail.com")
          }
        }
      )
    }else{
      this.isValid = false
      console.log(this.isValid)
    }
  }

  checkUsername(){
    this.userService.existsUser(this.registerForm.value.username).subscribe(response => {
      if(response.status === 200){
        return this.doesUsernameExists = false
      }else{
        return this.doesUsernameExists = true
      }
    }, error => {
      
        this.doesUsernameExists = true
    })
  }
  checkEmail(){
    this.userService.existsEmail(this.registerForm.value.email).subscribe(response => {
      if(response.status === 200){
        return this.doesEmailExists = false
      }else{
        return this.doesEmailExists = true
      }
    }, error => {
      
        this.doesEmailExists = true
    })
  }
  checkPhone(){
    this.userService.existsPhone(this.registerForm.value.password).subscribe(response => {
      if(response.status === 200){
        return this.doesPhoneExists = false
      }else{
        return this.doesPhoneExists = true
      }
    }, error => {
      this.doesPhoneExists = true
    })
  }
}
