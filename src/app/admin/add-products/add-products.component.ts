import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  data = this.formBuilder.group({
    name: '',
    model: '',
    description: '',
    quantity: '',
    price: '',
    image: '',
    tags: '',
  })

  name = ''
  nameInputStyle = `::ng-deep .mat-focused .mat-form-field-label {
    /*change color of label*/
    color: green !important;
   }`
  success = false
  failed = false
  doesNameExists = false
  
  constructor(
    private adminService: AdminService, 
    private formBuilder: FormBuilder  
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let data = this.data.value
    data.tags = this.transformTags(data.tags)
    data.createdDate = moment.utc('2002-12-09')
    data.lastUpdated = data.createdDate
    console.log(this.data.value)
    this.adminService.addProduct(this.data.value).subscribe(response => {
      if(response.status === 200){
        return this.success = true
      }
      return this.failed = false
    })
  }
  
  checkName(name: string){
    this.adminService.doesNameExists(name).subscribe(response => {
      if(response.message){
        this.doesNameExists = true
      }else{
        this.doesNameExists = false
      }
    }
    )
  }

  transformTags(tags: any){
    let tagsArray = []
    let tag = ""
    for(let a in tags){
      if(tags[a] === ","){
        tagsArray.push(tag)
        tag = ""
        continue
      }if(tags[Number(a)-1] === " "){
        continue
      }
      else{
        if(Number(a) + 1 === tags.length){
          tagsArray.push(tag)
          break
        }
        tag = tag + tags[a]
      }
    }
    return tagsArray
  }
}
