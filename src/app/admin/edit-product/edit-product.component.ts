import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';
import * as moment from 'moment';
import {products} from '../../products'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  data = this.formBuilder.group({
    name: '',
    model: '',
    description: '',
    quantity: '',
    price: '',
    image: '',
    tags: '',
  })
  dataFromApi = {
    name: '',
    model: '',
    description: '',
    quantity: '',
    price: '',
    image: '',
    tags: '',
    lastUpdated: moment.utc('2002-12-09')
  }
  name = ''
  id = ''
  success = false
  failed = false
  doesNameExists = false

  constructor(
    private adminService: AdminService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.id = url[0].path
      this.getProductById(this.id)
    })
    
  }
  checkName(name: string) {
    this.adminService.doesNameExists(name).subscribe(response => {
      console.log(this.dataFromApi.name);
      console.log(name);
      
      if(response.message === true && name !== response.user ){
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

  getProductById(id: string){
    this.adminService.getProdById(id).subscribe(response => {
      response.tags = response.tags.join(', ')
      this.dataFromApi = response
      console.log(response.tags)
      console.log(this.dataFromApi);
    })
  }
  updateProduct(){
    this.dataFromApi.name = this.data.value.name
    this.dataFromApi.model = this.data.value.model
    this.dataFromApi.quantity = this.data.value.quantity
    this.dataFromApi.price = this.data.value.price
    this.dataFromApi.image = this.data.value.image
    this.dataFromApi.tags = this.data.value.tags
    this.dataFromApi.lastUpdated = moment.utc('2002-12-09')
    this.adminService.updateProductById(this.id, this.dataFromApi).subscribe(response => {
      this.success = true
      this.failed = false
    },
    err => {
      this.failed = true
      this.success = false
    }
    )
  }
}
