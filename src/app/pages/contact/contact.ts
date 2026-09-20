import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-contact',
  imports: [Hero],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
    titre = `Contact`;
  description = "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
  cta1 = "Shop Now";
  cta2 = "Explore";
  image = "assets/images/couch.png";
}
