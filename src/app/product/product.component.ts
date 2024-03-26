import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
interface Product {
  id: string;
  title: string;
  price: number;
  checked: boolean;
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public products: Product[] = [
    {
      id: "1",
      title: "product 1",
      price: 1000,
      checked: true
    },
    {
      id: "2",
      title: "product 2",
      price: 2000,
      checked: false
    },
    {
      id: "3",
      title: "product 3",
      price: 1500,
      checked: true
    },
    {
      id: "4",
      title: "product 4",
      price: 7000,
      checked: true
    }
  ];
  constructor() {
  }
}
