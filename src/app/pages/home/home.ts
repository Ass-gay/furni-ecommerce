import { Component } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Blog } from '../blog/blog';
import { Product } from '../../shared/product/product';
import { About } from '../about/about';
import { Help } from '../../shared/help/help';
import { Popular } from '../../shared/popular/popular';
import { Chose } from '../../shared/chose/chose';
import { BlogDetail } from '../../shared/blog-detail/blog-detail';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Testimonial, Blog, Product, About, Help, Popular, Chose, BlogDetail, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titre = 'Modern Interior Design Studio';
  description = "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
  cta1 = "Shop Now";
  cta2 = "Explore";
  image = "assets/images/couch.png";
}
