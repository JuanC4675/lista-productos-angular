import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Productos';
  today = new Date();

  showList = true;
  newProductName: string = '';
  newProductPrice: number = 0;

  products: Product[] = [
    { name: 'Balón de Fútbol', price: 30, image: 'https://via.placeholder.com/150' },
    { name: 'Raqueta de Tenis', price: 120, image: 'https://via.placeholder.com/150' },
    { name: 'Guantes de Boxeo', price: 60, image: 'https://via.placeholder.com/150' }
  ];

  toggleList() {
    this.showList = !this.showList;
  }

  addProduct() {
    if (this.newProductName.trim() && this.newProductPrice > 0) {
      this.products.push({
        name: this.newProductName,
        price: this.newProductPrice,
        image: 'https://via.placeholder.com/150'
      });
      this.newProductName = '';
      this.newProductPrice = 0;
    }
  }
}
