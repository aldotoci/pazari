import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminLoginService } from '../../_services/admin-login.service'
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  response: Object = {}
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  didLogginFailed = false

  constructor(private formBuilder: FormBuilder,private adminLoginService: AdminLoginService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.tokenService.removeToken()
  }

  onSubmit(): void{
    let login_creds = this.loginForm.value
    let test = {token: 'asd'}
    this.adminLoginService.loginAsAdmin(login_creds.username, login_creds.password).subscribe((response) => {
      const token = response.token
      console.log('test');

      if(token !== null){
        this.tokenService.setToken(token)
        window.location.assign('/admin')
        return
      }
    }, err => {
      this.didLogginFailed = true
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
