import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isMenuCollapsed = true;

  signOut(){
    window.location.assign('/admin_login')
  }
}
