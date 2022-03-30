import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../_services/products-service.service';
import { Product } from '../../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any = []

  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    let productsFromApi 
    this.productService.getProductFromApi().subscribe(products => this.products = products)
    console.log(productsFromApi)
  }
}
