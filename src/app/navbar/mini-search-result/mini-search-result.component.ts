import { Component, OnInit, Input } from '@angular/core';
import {ProductsServiceService} from '../../_services/products-service.service'

@Component({
  selector: 'app-mini-search-result',
  templateUrl: './mini-search-result.component.html',
  styleUrls: ['./mini-search-result.component.css']
})
export class MiniSearchResultComponent implements OnInit {
  constructor(private productsServiceService: ProductsServiceService) { }
  @Input() query = ''
  products: any = null


  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
    if(this.query !== ''){
      this.productsServiceService.getMiniSearchResults(this.query).subscribe(response => {
        this.products = response.products
      })
    }else{
      this.products = null
    }
  }

  onProductClick(): void{
    this.products = null
  }

}
