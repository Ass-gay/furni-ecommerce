import { Component } from '@angular/core';
import { Team } from '../../shared/team/team';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Chose } from '../../shared/chose/chose';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-about',
  imports: [Team, Testimonial, Chose, Hero],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    titre = `About US`;
  description = "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
  cta1 = "Shop Now";
  cta2 = "Explore";
  image = "assets/images/couch.png";
}
