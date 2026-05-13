import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Product } from '../api-service';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, Card],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() products: Product[] = [];
}
