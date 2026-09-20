import { Component } from '@angular/core';
import { Product } from '../../shared/product/product';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-services',
  imports: [Product, Testimonial, Hero],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
    titre = `Services`;
  description = "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
  cta1 = "Shop Now";
  cta2 = "Explore";
  image = "assets/images/couch.png";
}
