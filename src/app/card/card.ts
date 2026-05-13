import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../api-service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product!: Product;
}
