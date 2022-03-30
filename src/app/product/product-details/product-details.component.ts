import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../_services/products-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productsServiceService: ProductsServiceService, 
    private route: ActivatedRoute  
  ) { }
  
  data: any = {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      let id = url[0].path
      this.productsServiceService.getProductById(id).subscribe(response => {
        this.data = response.product
        console.log(this.data)
      }, err => {
        this.data = {}
      })
    })
  }
}
