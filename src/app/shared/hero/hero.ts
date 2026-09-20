import { Component, Input, input, Signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  titre = input<string>();
  description = input<string>();
  cta1 = input<string>();
  cta2 = input<string>();
  image = input<string>();
}
