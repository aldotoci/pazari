import { Component, OnInit } from '@angular/core';
import { TokenService } from '../_services/token.service';
import { AdminLoginService } from '../_services/admin-login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private tokenService: TokenService, private adminLoginService: AdminLoginService) { }

  ngOnInit(): void {
    const token = this.tokenService.getToken()
    if(token !== null){
      this.adminLoginService.isAdmin().subscribe(response => {
        if(response.status === 200){
          return
        }
        window.location.assign('/admin_login')
      },
      err => {
        window.location.assign('/admin_login')
      } 
      )
    }else{
      window.location.assign('/admin_login')
    }
  }

}
