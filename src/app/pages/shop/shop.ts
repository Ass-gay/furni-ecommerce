import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-shop',
  imports: [Hero],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {}
