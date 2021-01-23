import { Component, OnInit } from '@angular/core';
import { IProduct } from '../_models/product';
import { ShopService } from '../_services/shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private shopService: ShopService) { }
  products: IProduct[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.shopService.getProducts().subscribe(response => {
      this.products = response;
    },
    error => {
      console.log(error);
    })
  }

}
