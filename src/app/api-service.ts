import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private products: Product[] = [
    {
      id: 1,
      name: 'PlayStation 5 Console',
      price: 499.99,
      description: 'Experience lightning-fast loading with an ultra-high speed SSD.',
      image: 'ps5.png',
      category: 'Console'
    },
    {
      id: 2,
      name: 'DualSense Wireless Controller',
      price: 69.99,
      description: 'Discover a deeper immersion with support for haptic feedback.',
      image: 'ps5.png', // Using same image as placeholder
      category: 'Accessory'
    },
    {
      id: 3,
      name: 'God of War Ragnarök',
      price: 69.99,
      description: 'Join Kratos and Atreus on a mythic journey for answers.',
      image: 'ps5.png', // Using same image as placeholder
      category: 'Game'
    },
    {
      id: 4,
      name: 'Marvel\'s Spider-Man 2',
      price: 69.99,
      description: 'Be Greater. Together.',
      image: 'ps5.png', // Using same image as placeholder
      category: 'Game'
    },
    {
      id: 5,
      name: 'Pulse 3D Wireless Headset',
      price: 99.99,
      description: 'Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio.',
      image: 'ps5.png',
      category: 'Accessory'
    },
    {
      id: 6,
      name: 'PlayStation Heritage Hoodie',
      price: 59.99,
      description: 'Stay warm in style with this classic PlayStation logo hoodie.',
      image: 'ps5.png',
      category: 'Clothing'
    },
    {
      id: 7,
      name: 'DualSense Icon T-Shirt',
      price: 29.99,
      description: 'A premium cotton t-shirt featuring the iconic DualSense controller pattern.',
      image: 'ps5.png',
      category: 'Clothing'
    },
    {
      id: 8,
      name: 'PlayStation Heritage Joggers',
      price: 49.99,
      description: 'Comfortable joggers featuring the PlayStation logo and symbols.',
      image: 'ps5.png',
      category: 'Clothing'
    },
    {
      id: 9,
      name: 'PS5 Logo Snapback',
      price: 24.99,
      description: 'Adjustable snapback cap with a 3D embroidered PS5 logo.',
      image: 'ps5.png',
      category: 'Clothing'
    },
    {
      id: 10,
      name: 'Controller Button Socks',
      price: 14.99,
      description: 'Add some gaming flair to your outfit with these icon-patterned socks.',
      image: 'ps5.png',
      category: 'Clothing'
    }
  ];

  constructor() { }

  getProducts() {
    return of(this.products);
  }

  getProductById(id: number) {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
