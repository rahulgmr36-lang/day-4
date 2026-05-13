import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Product } from '../api-service';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-products',
  imports: [CommonModule, Cards],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productList: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }
}
