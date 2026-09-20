import { Component } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-blog',
  imports: [Testimonial, Hero],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog{
    titre = `Blog`;
  description = "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
  cta1 = "Shop Now";
  cta2 = "Explore";
  image = "assets/images/couch.png";
}
