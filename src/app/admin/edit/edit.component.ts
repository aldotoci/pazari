import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import * as moment from 'moment';
import {products} from '../../products'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  search : String ="";

  
  nameInputStyle = `::ng-deep .mat-focused .mat-form-field-label {
    /*change color of label*/
    color: green !important;
   }`


  searchResultUnder: any = null
  query = ""
  
  constructor(
    private adminService: AdminService, 
    private formBuilder: FormBuilder  
  ) { }

  ngOnInit(): void {
  }

  search5Items(){
    console.log(this.query);
    
    this.adminService.get5Products(this.query).subscribe(response => {
        this.searchResultUnder = response.data
    })
  }
}
